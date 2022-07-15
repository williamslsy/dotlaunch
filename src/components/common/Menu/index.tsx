import styled, { keyframes } from 'styled-components';
import {
  MenuButton,
  MenuDivider,
  MenuItem,
  Menu as MenuInner,
  SubMenu,
} from '@szhsin/react-menu';
import {
  menuSelector,
  menuItemSelector,
  menuDividerSelector,
  menuButtonSelector,
} from '@szhsin/react-menu/style-utils';
import '@szhsin/react-menu/dist/core.css';
import rightArrow from '../../../assets/images/chevron-right-solid.svg';
import { SecondaryButton } from '../Button';

const menuShow = keyframes`
  from {
    opacity: 0;
  }
`;
const menuHide = keyframes`
  to {
    opacity: 0;
  }
`;

export const AppMenu = styled(MenuInner)`
  ${menuSelector.name} {
    font-family: sans-serif;
    font-size: 0.925rem;
    user-select: none;
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 6px;
    min-width: 10rem;
    background: ${(props) => props.theme.colors.secondaryBackground};
    margin-top: 0.5rem;
  }

  ${menuSelector.stateOpening} {
    animation: ${menuShow} 0.15s ease-out;
  }

  ${menuSelector.stateClosing} {
    animation: ${menuHide} 0.2s ease-out;
  }

  ${menuItemSelector.name} {
    border-radius: 6px;
    padding: 0.375rem 0.625rem;
  }

  ${menuItemSelector.hover} {
    background-color: ${(props) => props.theme.colors.primaryText}10;
  }

  ${menuDividerSelector.name} {
    margin: 0.5rem 0.625rem;
  }

  ${menuButtonSelector.name} {
    background: transparent;
    border: 2px solid ${(props) => props.theme.colors.primaryBlue};
    color: ${(props) => props.theme.colors.primaryBlue};
    font-weight: bold;
    transition: all 0.3s ease;
    display: inline-block;
    outline: none;
    font-size: 0.9rem;

    &:hover {
      background: ${(props) => props.theme.colors.secondaryBlue};
    }
  }

  ${menuItemSelector.submenu} {
    position: relative;
    &::after {
      content: url(${rightArrow});
      position: absolute;
      width: 7px;
      right: 0.625rem;
    }
  }
`;

export function AppsMenu() {
  return (
    <>
      <AppMenu
        align="end"
        transition
        menuButton={<SecondaryButton size="small">Connect</SecondaryButton>}
      >
        <MenuItem>New File</MenuItem>
        <MenuItem>Print...</MenuItem>
      </AppMenu>
    </>
  );
}
