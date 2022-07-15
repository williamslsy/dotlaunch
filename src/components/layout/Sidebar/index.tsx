import React, { useContext, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  SidebarContext,
  SideBarContextType,
} from '../../../context/sidebarcontext';
import routes from '../../../routes/sidebar';
import SidebarSubmenu from './SidebarSubMenu';

interface ISidebarContainerType {
  sidebarState: boolean;
  sidebarHoverState?: boolean;
}

const SidebarContainer = styled.div.attrs<ISidebarContainerType>(() => ({
  className: `pt-10 px-2 h-screen shadow-lg relative`,
}))<ISidebarContainerType>`
  transition: transform 0.5s ease, width 0.5s ease;
  width: ${(props) => (props.sidebarState ? '240px' : '80px')};
  background: ${(props) => props.theme.colors.secondaryBackground};
  position: ${(props) => (props.sidebarState ? 'relative' : 'fixed')};
  top: 0;
  left: 0;
  z-index: 5;
  overflow-x: hidden;

  .hideOnClose {
    transition: all 0.1s ease;
    opacity: ${(props) =>
      props.sidebarState || props.sidebarHoverState ? '1' : '0'};
  }

  ${(props) =>
    !props.sidebarState && props.sidebarHoverState
      ? `
        width: 240px;
      `
      : ''};

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    position: fixed;
    max-width: 240px;
    transform: ${(props) =>
      props.sidebarState ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

export const Sidebar = () => {
  const {
    isSidebarOpen,
    isSidebarHover,
    hoverSideBar,
    removeHoverSideBar,
    closeSidebar,
  } = useContext<SideBarContextType>(SidebarContext);
  const location = useLocation();

  useEffect(() => {
    if (closeSidebar && window.screen.width <= 1024) closeSidebar();
  }, [location]);

  return (
    <SidebarContainer
      onMouseOver={hoverSideBar}
      onMouseLeave={removeHoverSideBar}
      sidebarState={isSidebarOpen}
      sidebarHoverState={isSidebarHover}
    >
      <ul className="my-10 space-y-1">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative text-center" key={route.name}>
              <NavLink
                to={route.path}
                className={(navData) =>
                  `${
                    navData.isActive
                      ? 'text-custom-dark-primaryBlue bg-custom-dark-secondaryBlue'
                      : ''
                  } rounded-lg px-6  w-full inline-flex whitespace-nowrap py-3 items-center text-base font-semibold transition-colors duration-150 hover:bg-custom-light-secondaryBlue`
                }
              >
                <i className={`las la-${route.icon} text-xl`}></i>
                <span className="ml-4 hideOnClose">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </SidebarContainer>
  );
};
