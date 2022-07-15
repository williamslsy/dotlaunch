import React, { useEffect, useState } from 'react';
import { AppThemeContext } from '.';

export const useDarkMode = () => {
  const valueContext = React.useContext(AppThemeContext);
  const [theme, setTheme] = useState('dark');
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode: 'light' | 'dark') => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = (): void => {
    theme === 'light' ? setMode('dark') : setMode('light');
    valueContext?.setContextTheme(theme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('dark');
    valueContext?.setContextTheme(theme);
    setMountedComponent(true);
  }, [theme, valueContext]);

  return { theme, mountedComponent, themeToggler };
};
