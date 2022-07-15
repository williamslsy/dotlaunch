import React from 'react';

import ReactSelect, { Theme } from 'react-select';
import styled from 'styled-components';

export interface IOptions {
  value: string;
  label: string;
}

const SelectContainer = styled.div`
  .Select__control {
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.primaryText}30;

    .Select__single-value {
      color: ${(props) => props.theme.colors.primaryText};
    }

    .Select__input-container {
      color: ${(props) => props.theme.colors.primaryText}80;
    }
  }
  .Select__menu {
    background: ${(props) => props.theme.colors.secondaryBackground};

    .Select__menu-list {
      .Select__option {
        &.Select__option--is-focused {
          background: transparent;
        }
        &.Select__option--is-selected {
          background: transparent;
          color: ${(props) => props.theme.colors.primaryText}80;
        }
        &:hover {
          background: ${(props) => props.theme.colors.secondaryBlue};
        }
      }
    }
  }
`;

export const applySelectTheme = (themeSelect: Theme) => ({
  ...themeSelect,
  // borderRadius: 0,
  colors: {
    ...themeSelect.colors,

    primary25: '#f8f9fa',
    // primary50: theme.colors.primaryGreen,
    primary: '#5D00FF',
  },
});

export const selectZIndex = 3;

interface IProps {
  options: IOptions[];
  // @ts-ignore // TODO: !! fix
  value: IOptions | IOptions[] | undefined;
  placeholder?: string;
  name?: string;
  // @ts-ignore TODO: !! fix
  onChange: (option: any) => void;
  className?: string;
  id?: string;
  isClearable?: boolean;
  disabled?: boolean;
  optionDisabled?: (option: IOptions) => boolean;
  multiple?: boolean;
  isOpen?: boolean;
  noOptionsMessage?:
    | ((obj: { inputValue: string }) => React.ReactNode)
    | undefined;
  // noOptionsMessage?: () => string | null;
  onInputChange?: (inputValue: string) => void;
  isSearchable?: boolean;
  inputRef?: any;
}

const customStyles = {
  option: (styles: object) => ({
    ...styles,
    cursor: 'pointer',
    fontSize: '0.9rem',
  }),
  control: (styles: object) => ({
    ...styles,
    cursor: 'pointer',
    fontSize: '0.9rem',
    padding: '0.1rem',
  }),
  menu: (styles: object) => ({
    ...styles,
    zIndex: selectZIndex,
  }),
  noOptionsMessage: (styles: object) => ({
    ...styles,
    fontSize: '0.9rem',
  }),
};

export default function AppSelect({
  id,
  className,
  placeholder,
  name,
  options,
  value,
  onChange,
  isClearable,
  disabled,
  optionDisabled,
  multiple,
  noOptionsMessage,
  isOpen,
  onInputChange,
  isSearchable,
  inputRef,
}: IProps) {
  return (
    <SelectContainer>
      <ReactSelect
        menuIsOpen={isOpen}
        styles={customStyles}
        instanceId={id}
        className={className}
        value={value ?? null}
        name={name}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isClearable={isClearable}
        theme={applySelectTheme}
        isDisabled={disabled}
        isOptionDisabled={optionDisabled}
        isMulti={multiple}
        noOptionsMessage={noOptionsMessage}
        onInputChange={onInputChange}
        isSearchable={isSearchable}
        classNamePrefix="Select"
        ref={inputRef}
      />
    </SelectContainer>
  );
}
