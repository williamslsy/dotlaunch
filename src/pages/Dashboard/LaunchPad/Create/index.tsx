import React, { useEffect, useState } from 'react';
import { PrimaryButton } from '../../../../components/common/Button';
import { Card } from '../../../../components/common/Card';
import {
  Input,
  Label,
  InputContainer,
} from '../../../../components/common/Inputs';
import StepForm from '../../../../components/layout/StepForm';
import Step from '../../../../components/layout/StepForm/step';
import {
  AdditionalInfo,
  DetailsSummary,
  LaunchInfo,
  VerifyToken,
} from './StepsForms';

export interface FormInputType {
  tokenAddress?: string;
  endDate?: Date;
  startDate?: Date;
  hardCap?: string;
  softCap?: string;
  liquidityLockUp?: number;
  liquidityPercent?: string;
  listingRate?: string;
  maximumLimit?: string;
  minimumLimit?: string;
  preSaleRate?: string;
  targetExchange?: string;
  description?: string;
  discord?: string;
  facebook?: string;
  github?: string;
  logoUrl?: string;
  reddit?: string;
  telegram?: string;
  twitter?: string;
  updates?: string;
  website?: string;
  totalSellingAmount?: string;
}

const CreateLaunchpad = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formInput, setFormInput] = useState<FormInputType>();

  const moveToNext = () => setActiveStep(activeStep + 1);
  const moveToPrevious = () => setActiveStep(activeStep - 1);

  const submitFormData = () => {
    // Make Http Request With The Complete Form Input
    //This method is called from the details summary page.
    console.log(formInput);
  };

  return (
    <div>
      <div className="py-10">
        <h3 className="font-bold text-3xl">Create Launchpad</h3>
      </div>
      <StepForm activeStep={activeStep}>
        <Step label="Verify Token" icon={<i className="las la-flag"></i>}>
          <VerifyToken
            moveToNext={moveToNext}
            sendFormData={(verifyData) =>
              setFormInput((prevState) => ({ ...prevState, ...verifyData }))
            }
          />
        </Step>
        <Step
          label="Launchpad Information"
          icon={<i className="las la-rocket"></i>}
        >
          <LaunchInfo
            moveToNext={moveToNext}
            moveToPrevious={moveToPrevious}
            sendFormData={(launchData) =>
              setFormInput((prevState) => ({ ...prevState, ...launchData }))
            }
          />
        </Step>
        <Step
          label="Additional Information"
          icon={<i className="las la-building"></i>}
        >
          <AdditionalInfo
            moveToNext={moveToNext}
            moveToPrevious={moveToPrevious}
            sendFormData={(additionalData) =>
              setFormInput((prevState) => ({ ...prevState, ...additionalData }))
            }
          />
        </Step>
        <Step label="Review Details" icon={<i className="las la-check"></i>}>
          <DetailsSummary
            formInput={formInput}
            submitFormData={submitFormData}
            moveToPrevious={moveToPrevious}
          />
        </Step>
      </StepForm>
    </div>
  );
};

export default CreateLaunchpad;
