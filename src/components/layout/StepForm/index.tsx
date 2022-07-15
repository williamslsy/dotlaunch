import React, { Children, Fragment, cloneElement } from 'react';
import styled from 'styled-components';
import { Line, Pill } from './elements';

// function renderHiddenElement(Component) {
//   return (
//     <Component
//       {...Component.props}
//       style={{ ...Component.props.style, display: 'none' }}
//     />
//   );
// }

const StepContainer = styled.div`
  margin: 0;
  position: relative;
`;
const StepperItemsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;
`;

export default function StepForm(props: { children: any; activeStep: number }) {
  return (
    <StepContainer>
      <StepperItemsContainer>
        {React.Children.map(props.children, (child, i) => {
          if (i === Children.count(props.children) - 1)
            return (
              <Fragment>
                <Pill
                  active={props.activeStep === i + 1}
                  label={child.props.label}
                  complete={props.activeStep > i + 1}
                >
                  <span className="text-2xl text-white">
                    {child.props.icon}
                  </span>
                </Pill>
              </Fragment>
            );

          return (
            <Fragment>
              <Pill
                active={props.activeStep === i + 1}
                complete={props.activeStep > 1 && i + 1 < props.activeStep}
                label={child.props.label}
              >
                <span className="text-2xl text-white">{child.props.icon}</span>
              </Pill>
              <Line
                complete={props.activeStep > 1 && i + 1 < props.activeStep}
              />
            </Fragment>
          );
        })}
      </StepperItemsContainer>
      {React.Children.map(props.children, (child, i) => {
        if (i + 1 === props.activeStep) return child;
        return cloneElement(child, { hidden: true });
      })}
    </StepContainer>
  );
}
