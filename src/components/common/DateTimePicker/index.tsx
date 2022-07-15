import React from 'react';
import styled from 'styled-components';
import Datetime from 'react-datetime';

const DateInputContainer = styled.div.attrs(() => ({
  className: `text-sm`,
}))`
  position: relative;

  .rdtPicker {
    background: ${(props) => props.theme.colors.secondaryBackground};

    td.rdtDay:hover,
    td.rdtHour:hover,
    td.rdtMinute:hover,
    td.rdtSecond:hover,
    .rdtTimeToggle:hover,
    button:hover,
    thead tr:first-of-type th:hover,
    .rdtCounter .rdtBtn:hover {
      background: ${(props) => props.theme.colors.primaryText}30;
    }
  }

  td.rdtMonth:hover,
  td.rdtYear:hover {
    background: ${(props) => props.theme.colors.primaryText}50;
  }
  input {
    border-radius: 4px;
    border-color: ${(props) => props.theme.colors.primaryText}30;
    padding: 0.3rem 0.7rem;
    width: 100%;
    cursor: pointer;
    background: transparent;
  }
  .date-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 0;
  }
`;
interface IDatePickerProps {
  value: string | Date | moment.Moment;
  onChange: (date: string | moment.Moment) => void;
  validDate?: (currentDate: any, selectedDate: any) => boolean;
  timeFormat?: string | boolean;
  dateFormat?: string | boolean;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  showInput?: boolean;
  utc?: boolean;
}
export const DateTimePicker = ({
  value,
  onChange,
  validDate,
  timeFormat,
  dateFormat,
  inputProps,
  showInput,
  utc,
}: IDatePickerProps) => {
  return (
    <DateInputContainer>
      <Datetime
        className="w-full"
        inputProps={inputProps}
        value={value}
        onChange={onChange}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        isValidDate={validDate}
        input={showInput}
        utc={utc}
      />
      <i className="date-icon las la-calendar text-2xl"></i>
    </DateInputContainer>
  );
};
