import React, { useState, useEffect } from 'react';
import { AppModal } from '../../../components/common/AppModal';
import AppSelect, { IOptions } from '../../../components/common/AppSelect';
import { PrimaryButton } from '../../../components/common/Button';
import { Card } from '../../../components/common/Card';
import {
  Input,
  Label,
  InputContainer,
  InputError,
  InputHint,
} from '../../../components/common/Inputs';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from '../../../components/common/Alerts';
import { formatNumberToCurrencyString } from '../../../utils';

const tokenTypeOptions: IOptions[] = [
  {
    label: 'Standard Token',
    value: 'Standard',
  },
  {
    label: 'Liquidity Generator Token',
    value: 'Liquidity',
  },
];

const validationSchema = Yup.object().shape({
  tokenType: Yup.string().required('Token type is required'),
  tokenName: Yup.string().required('Token name is required'),
  tokenSymbol: Yup.string().required('Token symbol is required'),
  tokenDecimals: Yup.string().required('Token Decimals is required.'),
  generateYield: Yup.string(),
  generateLiquidity: Yup.string(),
  tokenSupply: Yup.number()
    .typeError('Token supply must be a number')
    .required('Token supply value is required'),
});
const formOptions = { resolver: yupResolver(validationSchema) };

const MintToken = () => {
  const [tokenOption, setTokenOption] = useState<string>();
  const [modalIsOpen, setModalOpen] = useState(false);
  const onModalClose = () => setModalOpen(false);
  const { register, handleSubmit, setError, formState, control } =
    useForm(formOptions);
  const { errors } = formState;

  const handleForm: SubmitHandler<any> = async (value) => {
    // Send http request with form data
    console.log(value);
    Alert({
      title: 'Token Created Successfully!',
      message: (
        <div className="py-5 space-y-2">
          <p className="flex justify-between">
            Name: <span>{value.tokenName}</span>
          </p>
          <p className="flex justify-between">
            Symbol: <span>{value.tokenSymbol}</span>
          </p>
          <p className="flex justify-between">
            Total Supply:{' '}
            <span>
              {formatNumberToCurrencyString(value.tokenSupply)}{' '}
              {value.tokenSymbol}
            </span>
          </p>
        </div>
      ),
    });
  };

  useEffect(() => {
    console.log(tokenOption);
  }, [tokenOption]);

  return (
    <div>
      <div className="text-center font-bold text-3xl py-10">
        <h3>Create Token</h3>
      </div>
      <div className="max-w-xl mx-auto">
        <Card>
          <form className="mt-5" onSubmit={handleSubmit(handleForm)}>
            <InputContainer>
              <Label htmlFor="tokenType">Token Type</Label>
              <Controller
                control={control}
                name="tokenType"
                render={({ field: { onChange, value, ref } }) => (
                  <AppSelect
                    inputRef={ref}
                    options={tokenTypeOptions}
                    value={tokenTypeOptions.find((c) => c.value === value)}
                    onChange={(val) => {
                      setTokenOption(val.value);
                      onChange(val.value);
                    }}
                    placeholder="Select Token Type"
                    isSearchable={false}
                  />
                )}
              />
              <InputError>{errors.tokenType?.message}</InputError>
              <InputHint>
                Fee: {tokenOption === 'Liquidity' ? '0.3 BNB' : '0.1 BNB'}
              </InputHint>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="tokenName">Token Name</Label>
              <Input
                type="text"
                placeholder="Ex. Astronaut"
                {...register('tokenName')}
                name="tokenName"
              />
              <InputError>{errors.tokenName?.message}</InputError>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="tokenSymbol">Token Symbol</Label>
              <Input
                type="text"
                placeholder="Ex. NAUT"
                {...register('tokenSymbol')}
                name="tokenSymbol"
              />
              <InputError>{errors.tokenSymbol?.message}</InputError>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="tokenDecimals">Token Decimals</Label>
              <Input
                type="number"
                placeholder="Ex. 18"
                {...register('tokenDecimals')}
                name="tokenDecimals"
              />
              <InputError>{errors.tokenDecimals?.message}</InputError>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="tokenSupply">Total Supply </Label>
              <Input
                type="number"
                placeholder="Ex. 32000000"
                {...register('tokenSupply')}
                name="tokenSupply"
              />
              <InputError>{errors.tokenSupply?.message}</InputError>
            </InputContainer>
            {tokenOption === 'Liquidity' && (
              <div>
                <InputContainer>
                  <Label htmlFor="generateYield">
                    Transaction fee to generate yield (%){' '}
                  </Label>
                  <Input
                    type="number"
                    placeholder="Ex. 2"
                    {...register('generateYield')}
                    name="generateYield"
                  />
                  <InputError>{errors.generateYield?.message}</InputError>
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="generateLiquidity">
                    Transaction fee to generate liquidity (%){' '}
                  </Label>
                  <Input
                    type="number"
                    placeholder="Ex. 2"
                    {...register('generateLiquidity')}
                    name="generateLiquidity"
                  />
                  <InputError>{errors.generateLiquidity?.message}</InputError>
                </InputContainer>
              </div>
            )}
            <InputContainer className="text-center">
              <PrimaryButton type="submit">Mint Token</PrimaryButton>
            </InputContainer>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default MintToken;
