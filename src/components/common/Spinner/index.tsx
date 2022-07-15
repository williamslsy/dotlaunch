import React from 'react';
import Loader from 'react-loader-spinner';

interface ISpinnerProps {
  type?:
    | 'Oval'
    | 'Audio'
    | 'BallTriangle'
    | 'Bars'
    | 'Circles'
    | 'Grid'
    | 'Hearts'
    | 'Puff'
    | 'Rings'
    | 'TailSpin'
    | 'ThreeDots'
    | 'Watch'
    | 'RevolvingDot'
    | 'Triangle'
    | 'Plane'
    | 'MutatingDots'
    | 'CradleLoader';
  color?: string;
  height?: number;
  width?: number;
  timeout?: number;
}

export const Spinner = ({
  type,
  color,
  height,
  width,
  timeout,
}: ISpinnerProps) => {
  return (
    <div>
      <Loader
        type={type || 'Oval'}
        color={color || '#00BFFF'}
        height={height || 100}
        width={width || 100}
        timeout={timeout || 0} //3 secs
      />
    </div>
  );
};
