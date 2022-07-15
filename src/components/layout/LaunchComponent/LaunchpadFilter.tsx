import React from 'react';
import styled from 'styled-components';

interface IFilterItem {
  className?: string;
}

const FilterItem = styled.button.attrs<IFilterItem>(() => ({
  className: `text-sm px-4 py-2 rounded-lg`,
}))<IFilterItem>`
  transition: all 0.3s ease;
  &.active {
    background: ${(props) => props.theme.colors.primaryBlue + '40'};
    color: ${(props) => props.theme.colors.primaryBlue};
  }
  &:hover {
    background: ${(props) => props.theme.colors.primaryBlue + '40'};
  }
  i {
    font-size: 1.1rem;
    margin-right: 0.2rem;
  }
`;

export const LaunchpadFilter = ({
  onSelect,
  selected,
}: {
  onSelect: (option: string) => void;
  selected: string;
}) => {
  return (
    <div className="flex flex-wrap justify-evenly">
      <FilterItem
        className={selected === 'kyc' ? 'active' : ''}
        onClick={() => onSelect('kyc')}
      >
        <i className="las la-fingerprint"></i>
        KYC
      </FilterItem>
      <FilterItem
        className={selected === 'upcoming' ? 'active' : ''}
        onClick={() => onSelect('upcoming')}
      >
        <i className="las la-hourglass-half"></i>
        Upcoming
      </FilterItem>
      <FilterItem
        className={selected === 'active' ? 'active' : ''}
        onClick={() => onSelect('active')}
      >
        <i className="las la-play"></i>
        Active
      </FilterItem>
      <FilterItem
        className={selected === 'success' ? 'active' : ''}
        onClick={() => onSelect('success')}
      >
        <i className="las la-thumbs-up"></i>
        Success
      </FilterItem>
      <FilterItem
        className={selected === 'failed' ? 'active' : ''}
        onClick={() => onSelect('failed')}
      >
        <i className="las la-power-off"></i>
        Failed
      </FilterItem>
    </div>
  );
};
