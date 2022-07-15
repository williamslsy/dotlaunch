import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {
  SidebarContext,
  SideBarContextType,
} from '../../../context/sidebarcontext';
import { MenuItem } from '@szhsin/react-menu';
import { AppModal } from '../../common/AppModal';
import { ModalContent } from '../../common/AppModal/ModalContent';
import { ModalHeader } from '../../common/AppModal/ModalHeader';
import { IconButton, SecondaryButton } from '../../common/Button';
import { AppMenu, AppsMenu } from '../../common/Menu';
import Toggler from '../../common/Toggler';
import BinanceLogo from './images/binance-logo.svg';
import EthLogo from './images/eth-logo.svg';
import PolygonLogo from './images/polygon-logo.png';
import RopstenLogo from './images/ropsten-logo.png';
import MetamaskLogo from './images/metamask.svg';
import CoinbaseLogo from './images/coinbase-wallet.svg';

interface IStyledToolbar {
  className?: string;
  isOpen?: boolean;
}

const ToolBarContainer = styled.div.attrs<IStyledToolbar>(() => ({
  className: `z-10 py-3 px-4 sm:pl-6 sm:pr-10 shadow flex justify-between items-center space-x-4`,
}))<IStyledToolbar>`
  background: ${(props) => props.theme.colors.secondaryBackground};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
`;

const NetworkSelector = styled.button.attrs(() => ({
  className: `w-full flex items-center space-x-3 py-3 pl-3 my-2 rounded-lg font-bold`,
}))`
  transition: all 0.3s ease;
  border: 1px solid ${(props) => props.theme.colors.primaryText}50;

  &:hover {
    box-shadow: 0 10px 17px hsl(0deg 0% 39% / 10%);
    background: ${(props) => props.theme.colors.secondaryRed};
  }
`;

const ToolBar = () => {
  const { toggleSidebar } = useContext<SideBarContextType>(SidebarContext);
  const [modalIsOpen, setModalOpen] = useState(false);
  const onModalClose = () => setModalOpen(false);

  return (
    <ToolBarContainer>
      <div className="flex items-center w-1/2 space-x-3">
        <div className="justify-end">
          <button onClick={toggleSidebar}>
            <i className="las la-bars text-3xl"></i>
          </button>
        </div>
        <h3 className="hidden sm:block font-black text-xl">SafeLaunch</h3>
      </div>
      <div className="flex space-x-4 w-1/2 items-center justify-end">
        <div>
          <IconButton>
            <i className="lab la-telegram-plane"></i>
          </IconButton>
        </div>
        <div>
          <Toggler />
        </div>
        <div className="hidden md:block">
          <SecondaryButton onClick={() => setModalOpen(true)} size="small">
            Networks
          </SecondaryButton>
        </div>
        <IconButton
          onClick={() => setModalOpen(true)}
          className="block md:hidden"
        >
          <i className="lab la-buffer"></i>
        </IconButton>
        {/* <SecondaryButton size="small">Connect</SecondaryButton> */}
        <AppMenu
          align="end"
          transition
          menuButton={<SecondaryButton size="small">Connect</SecondaryButton>}
        >
          <MenuItem>
            <div className="flex space-x-3 items-center py-2">
              <img src={MetamaskLogo} width="30" /> <span>Metamask</span>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex space-x-3 items-center py-2">
              <img src={CoinbaseLogo} width="30" />
              <span>Coinbase Wallet</span>
            </div>
          </MenuItem>
        </AppMenu>
      </div>
      <div>
        <AppModal modalIsOpen={modalIsOpen} closeModal={onModalClose}>
          <ModalHeader text="Select Network" onModalClose={onModalClose} />
          <ModalContent>
            <NetworkSelector>
              <img src={BinanceLogo} alt="B" width={50} />
              <span>Binance Smart Chain</span>
            </NetworkSelector>
            <NetworkSelector>
              <img src={EthLogo} alt="B" width={50} />
              <span>Ethereum Mainnet</span>
            </NetworkSelector>
            <NetworkSelector>
              <img src={PolygonLogo} alt="B" width={50} />
              <span>Matic/Polygon</span>
            </NetworkSelector>
            <div className="my-3 py-4 px-3 font-bold bg-custom-light-primaryBackground dark:bg-custom-dark-primaryBackground">
              <h3>Testnets</h3>
            </div>
            <NetworkSelector>
              <img src={RopstenLogo} alt="B" width={50} />
              <span>Ropsten</span>
            </NetworkSelector>
            <NetworkSelector>
              <img src={BinanceLogo} alt="B" width={50} />
              <span>Binance Smart Chain Testnet</span>
            </NetworkSelector>
          </ModalContent>
        </AppModal>
      </div>
    </ToolBarContainer>
  );
};

export default ToolBar;
