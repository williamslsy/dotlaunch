import React, { useState, useMemo } from 'react';

export type SideBarContextType = {
  isSidebarOpen: boolean;
  isSidebarHover?: boolean;
  toggleSidebar?: () => void;
  closeSidebar?: () => void;
  openSideBar?: () => void;
  hoverSideBar?: () => void;
  removeHoverSideBar?: () => void;
};

const defaultContext: SideBarContextType = {
  isSidebarOpen: true,
};

// create context
export const SidebarContext =
  React.createContext<SideBarContextType>(defaultContext);

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarHover, setIsSidebarHover] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openSideBar() {
    setIsSidebarOpen(true);
  }

  function hoverSideBar() {
    setIsSidebarHover(true);
  }
  function removeHoverSideBar() {
    setIsSidebarHover(false);
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
      openSideBar,
      isSidebarHover,
      hoverSideBar,
      removeHoverSideBar,
    }),
    [isSidebarOpen, isSidebarHover]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
