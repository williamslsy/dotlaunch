import * as React from 'react';
import styled from 'styled-components';

interface ITabSelectorButtonProps {
  className?: string;
  isActive?: boolean;
}

const TabSelectorButton = styled.div.attrs<ITabSelectorButtonProps>(() => ({
  className: `mr-8 group inline-flex items-center px-3 py-2 border-b-2 font-bold text-base leading-5 cursor-pointer whitespace-nowrap`,
}))<ITabSelectorButtonProps>`
  ${(props) =>
    props.isActive
      ? `
    border-color: ${props.theme.colors.primaryRed};
    color: ${props.theme.colors.primaryRed};
  `
      : `
      border-color: transparent;
    `}
`;

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  // <button
  //   className={`mr-8 group inline-flex items-center px-2 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ${
  //     isActive
  //       ? 'border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700'
  //       : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300'
  //   }`}
  //   onClick={onClick}
  // >
  //   {children}
  // </button>
  <TabSelectorButton isActive={isActive} onClick={onClick}>
    {children}
  </TabSelectorButton>
);
