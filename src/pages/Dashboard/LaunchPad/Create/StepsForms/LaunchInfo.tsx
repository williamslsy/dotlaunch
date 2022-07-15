import React, { useState } from 'react';
import { Card } from '../../../../../components/common/Card';
import {
  Input,
  InputContainer,
  InputError,
  InputHint,
  Label,
} from '../../../../../components/common/Inputs';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { PrimaryButton } from '../../../../../components/common/Button';
import AppSelect, {
  IOptions,
} from '../../../../../components/common/AppSelect';
import { DateTimePicker } from '../../../../../components/common/DateTimePicker';

const targetDexOptionsList: IOptions[] = [
  {
    label: 'BakerySwap',
    value: 'BakerySwap',
  },
  {
    label: 'PancakeSwap',
    value: 'PancakeSwap',
  },
];

const validationSchema = Yup.object().shape({
  preSaleRate: Yup.string().required('Presale rate is required'),
  softCap: Yup.string().required('Softcap is required'),
  hardCap: Yup.string().required('hardCap is required'),
  minimumLimit: Yup.string().required('Minimum contributing limit is required'),
  maximumLimit: Yup.string().required('Maximum contributing limit is required'),
  targetExchange: Yup.string().required('Select an exchange.'),
  liquidityPercent: Yup.string().required('Liquidity percentage is required.'),
  listingRate: Yup.string().required('Listing rate is required.'),
  liquidityLockUp: Yup.number()
    .required('Lockup must be greater than 5 minutes.')
    .min(5, 'Lockup must be greater than 5 minutes'),
  startDate: Yup.date()
    .required('Start date is required.')
    .min(new Date(), 'Start time cannot be in the past'),
  endDate: Yup.date()
    .required('End date is required.')
    .min(Yup.ref('startDate'), "End date can't be before start date"),
});
const formOptions = { resolver: yupResolver(validationSchema) };

export const LaunchInfo = ({
  moveToNext,
  moveToPrevious,
  sendFormData,
}: {
  moveToNext: () => void;
  moveToPrevious: () => void;
  sendFormData: (form: any) => void;
}) => {
  const [selectedExchange, setSelectedExchange] = useState<IOptions>();
  const { register, handleSubmit, setError, formState, control } =
    useForm(formOptions);
  const { errors } = formState;

  const handleForm: SubmitHandler<any> = async (value) => {
    console.log(value);
    sendFormData(value);
    moveToNext();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(handleForm)}>
        <InputContainer>
          <Label htmlFor="preSaleRate">Presale Rate</Label>
          <Input
            placeholder="Ex. 500"
            type="text"
            {...register('preSaleRate')}
            name="preSaleRate"
          />
          <InputError>{errors.preSaleRate?.message}</InputError>
          <InputHint>
            If I spend 1 BNB, how many tokens will I receive?
          </InputHint>
        </InputContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputContainer>
            <Label htmlFor="softCap">Softcap</Label>
            <Input
              placeholder="Soft Cap Ex. 20"
              type="text"
              {...register('softCap')}
              name="softCap"
            />
            <InputError>{errors.softCap?.message}</InputError>
            <InputHint>Softcap must be &gt;= 50% of Hardcap!</InputHint>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="hardCap">Hardcap</Label>
            <Input
              placeholder="Hard Cap Ex. 40"
              type="text"
              {...register('hardCap')}
              name="hardCap"
            />
            <InputError>{errors.hardCap?.message}</InputError>
          </InputContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputContainer>
            <Label htmlFor="minimumLimit">Minimum Contribution Limit</Label>
            <Input
              placeholder="Ex. 0.1"
              type="text"
              {...register('minimumLimit')}
              name="minimumLimit"
            />
            <InputError>{errors.minimumLimit?.message}</InputError>
            <InputHint>
              Enter the minimum and maximum amounts each wallet can contribute
            </InputHint>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="maximumLimit">Maximum Contribution Limit</Label>
            <Input
              placeholder="Ex. 10"
              type="text"
              {...register('maximumLimit')}
              name="maximumLimit"
            />
            <InputError>{errors.maximumLimit?.message}</InputError>
          </InputContainer>
        </div>

        <InputContainer>
          <Label htmlFor="targetExchange">Select Target Exchange</Label>
          <Controller
            control={control}
            name="targetExchange"
            render={({ field: { onChange, value, ref } }) => (
              <AppSelect
                inputRef={ref}
                options={targetDexOptionsList}
                value={targetDexOptionsList.find((c) => c.value === value)}
                onChange={(val) => {
                  setSelectedExchange(val.value);
                  onChange(val.value);
                }}
                placeholder="Select Exchange"
                isSearchable={false}
              />
            )}
          />
          <InputError>{errors.targetExchange?.message}</InputError>
        </InputContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputContainer>
            <Label htmlFor="liquidityPercent">
              {selectedExchange} Liquidity (%)
            </Label>
            <Input
              placeholder="Ex. 60"
              type="text"
              {...register('liquidityPercent')}
              name="liquidityPercent"
            />
            <InputError>{errors.liquidityPercent?.message}</InputError>
            <InputHint>
              Enter the percentage of raised funds that should be allocated to{' '}
              {selectedExchange}
              Liquidity on (Min 51%, Max 100%)
            </InputHint>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="listingRate">{selectedExchange} Listing Rate</Label>
            <Input
              placeholder="Ex. 400"
              type="text"
              {...register('listingRate')}
              name="listingRate"
            />
            <InputError>{errors.listingRate?.message}</InputError>
            <InputHint>
              Enter the BakerySwap listing price: (If I buy 1 BNB worth on
              BakerySwap how many tokens do I get? Usually this amount is lower
              than presale rate to allow for a higher listing price on
              BakerySwap)
            </InputHint>
          </InputContainer>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputContainer>
            <Label htmlFor="startDate">Start Date (UTC)</Label>
            <Controller
              control={control}
              name="startDate"
              render={({ field: { onChange, value, ref } }) => (
                <DateTimePicker onChange={onChange} value={value} utc={true} />
              )}
            />
            <InputError>{errors.startDate?.message}</InputError>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="endDate">End Date (UTC)</Label>
            <Controller
              control={control}
              name="endDate"
              render={({ field: { onChange, value, ref } }) => (
                <DateTimePicker onChange={onChange} value={value} utc={true} />
              )}
            />
            <InputError>{errors.endDate?.message}</InputError>
          </InputContainer>
        </div>
        <InputContainer>
          <Label htmlFor="liquidityLockUp">Liquidity Lockup</Label>
          <Input
            placeholder="Ex. 10"
            type="number"
            {...register('liquidityLockUp')}
            name="liquidityLockUp"
          />
          <InputError>{errors.liquidityLockUp?.message}</InputError>
        </InputContainer>

        <InputContainer className="flex justify-between">
          <PrimaryButton size="small" type="button" onClick={moveToPrevious}>
            Previous
          </PrimaryButton>
          <PrimaryButton size="small" type="submit">
            Next
          </PrimaryButton>
        </InputContainer>
      </form>
    </Card>
  );
};
