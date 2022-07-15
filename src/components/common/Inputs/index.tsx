import styled, { Interpolation } from 'styled-components';

interface InputProps {
  className?: string;
  style?: Interpolation<React.CSSProperties>;
}

export const Input = styled.input.attrs(() => ({
  className: `w-full`,
}))`
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.primaryText}30;
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  font-size: 0.95rem;

  &:focus {
    border-color: ${(props) => props.theme.colors.primaryBlue};
  }
`;

export const TextArea = styled.textarea.attrs(() => ({
  className: `w-full`,
  rows: 5,
}))`
  border-radius: 4px;
  border-color: ${(props) => props.theme.colors.primaryText}30;
  padding: 0.3rem 0.7rem;
  background: transparent;
  font-size: 0.95rem;

  &:focus {
    border-color: ${(props) => props.theme.colors.primaryBlue};
  }
`;

export const Label = styled.label.attrs(() => ({
  className: `text-sm mb-1 block font-bold`,
}))``;

export const InputContainer = styled.div.attrs<InputProps>(() => ({
  className: `mb-8 relative`,
}))<InputProps>`
  ${({ style }) => style};
`;

export const InputError = styled.div.attrs(() => ({
  className: `text-xs text-custom-light-primaryRed mt-1`,
}))``;
export const InputHint = styled.div.attrs(() => ({
  className: `text-xs mt-1 font-light`,
}))`
  color: ${(props) => props.theme.colors.primaryText}90;
`;
export const InputField = styled.div.attrs(() => ({
  className: `relative m-0 p-0`,
}))``;

export const InputSuffix = styled.div.attrs(() => ({
  className: `absolute top-5 right-2`,
}))``;
export const InputPrefix = styled.div.attrs(() => ({
  className: `absolute top-5 left-2`,
}))``;
