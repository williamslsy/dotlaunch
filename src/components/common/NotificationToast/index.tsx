import toast, { ToastPosition } from 'react-hot-toast';
import { Renderable } from 'react-hot-toast/dist/core/types';

interface IToastTypes {
  message: string;
  duration?: number;
  position?: ToastPosition;
  icon?: Renderable;
}

export const successToast = ({ message, duration, position }: IToastTypes) =>
  toast.success(`${message}`, {
    duration: duration || 5000,
    position: position || 'top-center',
    className:
      'bg-custom-light-primaryBackground dark:bg-custom-dark-primaryBackground text-custom-light-primaryText dark:text-custom-dark-primaryText',
    style: {
      padding: '0.6rem 1rem',
      marginTop: '1rem',
      border: '2px solid #5D00FF60',
    },
  });

export const errorToast = ({ message, duration, position }: IToastTypes) =>
  toast.error(`${message}`, {
    duration: duration || 5000,
    position: position || 'top-center',
    className:
      'bg-custom-light-primaryBackground dark:bg-custom-dark-primaryBackground text-custom-light-primaryText dark:text-custom-dark-primaryText',
    style: {
      padding: '0.6rem 1rem',
      marginTop: '1rem',
      border: '2px solid #FF007570',
    },
  });

export const customToast = ({
  message,
  duration,
  position,
  icon,
}: IToastTypes) =>
  toast(`${message}`, {
    duration: duration || 5000,
    position: position || 'top-center',
    icon: icon,
    className:
      'bg-custom-light-primaryBackground dark:bg-custom-dark-primaryBackground text-custom-light-primaryText dark:text-custom-dark-primaryText',
    style: {
      padding: '0.6rem 1rem',
      marginTop: '1rem',
      border: '2px solid #FF007570',
    },
  });
