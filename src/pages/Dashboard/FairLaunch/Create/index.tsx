import React, { useState } from 'react';
import StepForm from '../../../../components/layout/StepForm';
import Step from '../../../../components/layout/StepForm/step';
import { FormInputType } from '../../LaunchPad/Create';
import {
  AdditionalInfo,
  DetailsSummary,
  VerifyToken,
} from '../../LaunchPad/Create/StepsForms';
import { FairLaunchInfo } from './StepForms/FairLaunchInfo';

const FairLaunch = () => {
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
        <h3 className="font-bold text-3xl">Create Fairlaunch</h3>
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
          <FairLaunchInfo
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

export default FairLaunch;
