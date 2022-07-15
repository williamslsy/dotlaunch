import React from 'react';
import styled from 'styled-components';

const ModalHeaderContainer = styled.div.attrs(() => ({
  className: `fixed top-0 right-0 items-center w-full flex justify-between shadow-md py-2 px-5`,
}))`
  background: ${(props) => props.theme.colors.secondaryBackground};
`;

export const ModalHeader = ({
  text,
  onModalClose,
}: {
  text: string;
  onModalClose: () => void;
}) => {
  return (
    <ModalHeaderContainer>
      <h3 className="font-bold text-xl">{text}</h3>
      <button onClick={onModalClose} className=" text-3xl">
        <i className="las la-times"></i>
      </button>
    </ModalHeaderContainer>
  );
};
