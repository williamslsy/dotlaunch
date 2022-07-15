import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  SidebarContext,
  SideBarContextType,
} from '../../../context/sidebarcontext';

function SidebarSubmenu({ route }: { route: any }) {
  const { isSidebarOpen, isSidebarHover } =
    useContext<SideBarContextType>(SidebarContext);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  useEffect(() => {
    if (!isSidebarOpen && !isSidebarHover) setIsDropdownMenuOpen(false);
  }, [isSidebarOpen, isSidebarHover]);

  return (
    <li className="relative text-center" key={route.name}>
      <button
        className={`py-3 px-6  w-full inline-flex items-center justify-between text-base font-semibold transition-colors duration-150 rounded-lg hover:bg-custom-dark-secondaryBlue`}
        onClick={handleDropdownMenuClick}
        aria-haspopup="true"
      >
        <span className="inline-flex whitespace-nowrap items-center">
          <i className={`las la-${route.icon} text-xl`}></i>
          <span className="ml-4 hideOnClose">{route.name}</span>
        </span>
        <i className="las la-angle-down hideOnClose"></i>
      </button>
      <ul
        style={{
          transition: 'max-height 0.5s ease, padding 0.5s ease',
          maxHeight: isDropdownMenuOpen ? '400px' : '0px',
          padding: isDropdownMenuOpen ? '0.5rem' : '0rem',
        }}
        className="space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
        aria-label="submenu"
      >
        {route.routes.map((r: any) => (
          <li
            className="pl-10 py-1 text-left transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            key={r.name}
          >
            <NavLink
              className={(navData) =>
                navData.isActive ? 'text-custom-dark-primaryBlue' : ''
              }
              to={r.path}
            >
              {r.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SidebarSubmenu;
