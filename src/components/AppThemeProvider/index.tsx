import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { SidebarProvider } from '../../context/sidebarcontext';
import { GlobalStyles } from './GlobalStyles';
import { darkTheme, lightTheme } from './theme';
import { useDarkMode } from './useDarkMode';

interface IPROVIDERSPROPS {
  children: React.ReactNode;
}

type ThemeContextType = {
  contextTheme: string;
  setContextTheme: (theme: string) => void;
};

export const AppThemeContext = React.createContext<ThemeContextType>({
  contextTheme: '',
  setContextTheme: () => null,
});

const AppThemeProviders: React.FC<IPROVIDERSPROPS> = ({ children }) => {
  const [contextTheme, setContextTheme] = useState<string>('');
  const { mountedComponent } = useDarkMode();
  const [themeMode, setThemeMode] = useState<
    DefaultTheme | ((theme: DefaultTheme) => DefaultTheme)
  >(darkTheme);

  useEffect(() => {
    setThemeMode(contextTheme === 'light' ? lightTheme : darkTheme);
    contextTheme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [contextTheme]);

  if (!mountedComponent) return <div />;

  return (
    <>
      <SidebarProvider>
        <AppThemeContext.Provider value={{ contextTheme, setContextTheme }}>
          <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            {children}
            <Toaster />
          </ThemeProvider>
        </AppThemeContext.Provider>
      </SidebarProvider>
    </>
  );
};

export default AppThemeProviders;
