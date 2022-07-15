import React, { useState } from 'react';
import { Card } from '../../../../../components/common/Card';
import {
  Input,
  InputContainer,
  InputError,
  InputHint,
  Label,
  TextArea,
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
  logoUrl: Yup.string().required('Logo is required'),
  website: Yup.string().required('Website is required'),
  github: Yup.string(),
  twitter: Yup.string(),
  facebook: Yup.string(),
  telegram: Yup.string(),
  reddit: Yup.string(),
  discord: Yup.string(),
  description: Yup.string(),
  updates: Yup.string(),
});
const formOptions = { resolver: yupResolver(validationSchema) };

export const AdditionalInfo = ({
  moveToNext,
  moveToPrevious,
  sendFormData,
}: {
  moveToNext: () => void;
  moveToPrevious: () => void;
  sendFormData: (form: any) => void;
}) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputContainer>
            <Label htmlFor="logoUrl">Logo Url</Label>
            <Input
              placeholder="Ex. https://images.com/a5cx8cge.png"
              type="text"
              {...register('logoUrl')}
              name="logoUrl"
            />
            <InputError>{errors.logoUrl?.message}</InputError>
            <InputHint>
              Must be a https URL and must end with a supported image extension
              .png .jpg .jpeg or .gif
            </InputHint>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="website">Website</Label>
            <Input
              placeholder="Ex. https://www.coin.network"
              type="text"
              {...register('website')}
              name="website"
            />
            <InputError>{errors.website?.message}</InputError>
          </InputContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputContainer>
            <Label htmlFor="github">Github</Label>
            <Input
              placeholder="Ex. https://www.github.com/coin"
              type="text"
              {...register('github')}
              name="github"
            />
            <InputError>{errors.github?.message}</InputError>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="twitter">Twitter</Label>
            <Input
              placeholder="Ex. https://www.twitter.com/coin"
              type="text"
              {...register('twitter')}
              name="twitter"
            />
            <InputError>{errors.twitter?.message}</InputError>
          </InputContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputContainer>
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              placeholder="Ex. https://www.facebook.com/coin"
              type="text"
              {...register('facebook')}
              name="facebook"
            />
            <InputError>{errors.facebook?.message}</InputError>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="telegram">Telegram</Label>
            <Input
              placeholder="Ex. https://t.me/coin"
              type="text"
              {...register('telegram')}
              name="telegram"
            />
            <InputError>{errors.telegram?.message}</InputError>
          </InputContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputContainer>
            <Label htmlFor="reddit">Reddit</Label>
            <Input
              placeholder="Ex. https://www.reddit.com/coin"
              type="text"
              {...register('reddit')}
              name="reddit"
            />
            <InputError>{errors.reddit?.message}</InputError>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="discord">Discord</Label>
            <Input
              placeholder="Ex. https://t.me/..."
              type="text"
              {...register('discord')}
              name="discord"
            />
            <InputError>{errors.discord?.message}</InputError>
          </InputContainer>
        </div>

        <InputContainer>
          <Label htmlFor="description">Project Description</Label>
          <TextArea
            placeholder="Ex. Our project is a completely decentralized application..."
            {...register('description')}
            name="description"
          />
          <InputError>{errors.description?.message}</InputError>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="updates">Additional Update About The Project</Label>
          <Input
            placeholder="Ex. Join us on twitter for our airdrop"
            type="text"
            {...register('updates')}
            name="updates"
          />
          <InputError>{errors.updates?.message}</InputError>
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
