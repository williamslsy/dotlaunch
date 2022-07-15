import React from 'react';
import { Card } from '../../../../../components/common/Card';
import {
  Input,
  InputContainer,
  InputError,
  Label,
} from '../../../../../components/common/Inputs';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PrimaryButton } from '../../../../../components/common/Button';

const validationSchema = Yup.object().shape({
  tokenAddress: Yup.string().required('Address is required'),
});
const formOptions = { resolver: yupResolver(validationSchema) };

export const VerifyToken = ({
  moveToNext,
  sendFormData,
}: {
  moveToNext: () => void;
  sendFormData: (data: any) => void;
}) => {
  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleTokenValidation: SubmitHandler<any> = async (value) => {
    console.log(value);
    sendFormData(value);
    moveToNext();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(handleTokenValidation)}>
        <InputContainer>
          <Label htmlFor="tokenAddress">Token Address</Label>
          <Input
            placeholder="Ex. 0x81507617417b71fC2d231F187bE4Bd919e572761"
            type="text"
            {...register('tokenAddress')}
            name="tokenAddress"
          />
          <InputError>{errors.tokenAddress?.message}</InputError>
        </InputContainer>
        <InputContainer className="text-right">
          <PrimaryButton size="small" type="submit">
            Next
          </PrimaryButton>
        </InputContainer>
      </form>
    </Card>
  );
};
