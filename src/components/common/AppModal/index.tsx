import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: 'fit-content',
    maxHeight: '70%',
    width: '90%',
    maxWidth: '540px',
    border: 'none',
    padding: '0',
    background: '#4f4f4f',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const ModalContent = styled.div.attrs(() => ({
  className: `w-full relative`,
}))`
  background: ${(props) => props.theme.colors.secondaryBackground};
  overflow-y: auto;
`;

ReactModal.setAppElement('#root');

export const AppModal = ({
  children,
  modalIsOpen,
  closeModal,
}: {
  children: React.ReactNode;
  modalIsOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Application Modal"
    >
      <ModalContent>{children}</ModalContent>
    </ReactModal>
  );
};
