import React, { useState, useEffect } from 'react';
import { PrimaryButton } from '../../../components/common/Button';
import { Card } from '../../../components/common/Card';
import {
  Input,
  Label,
  InputContainer,
  InputError,
} from '../../../components/common/Inputs';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { DateTimePicker } from '../../../components/common/DateTimePicker';
import { successToast } from '../../../components/common/NotificationToast';
import { Badge } from '../../../components/common/Badge';
import { Alert } from '../../../components/common/Alerts';

const validationSchema = Yup.object().shape({
  tokenAddress: Yup.string().required('Token address is required'),
  amount: Yup.string().required('Amount of token is required'),
  lockTime: Yup.date()
    .required('Start date is required.')
    .min(new Date(), 'Lock time cannot be in the past'),
});
const formOptions = { resolver: yupResolver(validationSchema) };

const LockToken = () => {
  const { register, handleSubmit, setError, formState, control } =
    useForm(formOptions);
  const { errors } = formState;

  const handleForm: SubmitHandler<any> = async (value) => {
    // Send http request with form data
    console.log(value);
    // successToast({ message: 'The form was created successfully' });
    Alert({
      title: 'Token Locked Successfully',
      iconHtml: '<i class="las la-lock"></i>',
      iconColor: '#00BA38',
    });
  };

  return (
    <div>
      <div className="text-center font-bold text-2xl py-10">
        <h3>Token Locker</h3>
      </div>
      <div className="max-w-xl mx-auto">
        <Card>
          <form className="mt-5" onSubmit={handleSubmit(handleForm)}>
            <InputContainer>
              <Label htmlFor="tokenAddress">Token Address</Label>
              <Input
                type="text"
                placeholder="Ex. 0x81507617417b71fC2d231F187bE4Bd919e572761"
                {...register('tokenAddress')}
                name="tokenAddress"
              />
              <InputError>{errors.tokenAddress?.message}</InputError>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="amount">Amount</Label>
              <Input
                type="text"
                placeholder="Ex. 1000"
                {...register('amount')}
                name="amount"
              />
              <InputError>{errors.amount?.message}</InputError>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="lockTime">Lock Time (UTC)</Label>
              <Controller
                control={control}
                name="lockTime"
                render={({ field: { onChange, value, ref } }) => (
                  <DateTimePicker
                    onChange={onChange}
                    value={value}
                    utc={true}
                    inputProps={{ placeholder: 'Select Date' }}
                  />
                )}
              />
              <InputError>{errors.lockTime?.message}</InputError>
            </InputContainer>
            <InputContainer className="text-center">
              <PrimaryButton type="submit">Lock Token</PrimaryButton>
            </InputContainer>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LockToken;
