import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { useDarkMode } from '../../AppThemeProvider/useDarkMode';

const Button = styled.button`
  color: ${(props) => props.theme.colors.primaryText};
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.6rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: fit-content;
  outline: none;
  }

`;

const Toggler = () => {
  const { theme, themeToggler } = useDarkMode();

  return (
    <Button onClick={() => themeToggler()}>
      {theme === 'light' ? (
        <i className="las la-moon"></i>
      ) : (
        <i className="las la-sun"></i>
      )}
    </Button>
  );
};

export default Toggler;
