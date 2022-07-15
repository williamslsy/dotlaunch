import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  ThemeProps,
} from 'styled-components';

export const GlobalStyles: GlobalStyleComponent<
  ThemeProps<DefaultTheme>,
  DefaultTheme
> = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.primaryBackground};
    color: ${(props) => props.theme.colors.primaryText};
    font-family: 'Play', sans-serif;
    transition: all 0.20s linear;
  }
  hr {
    border: 1px solid ${(props) => props.theme.colors.primaryText}40;
  }
  `;
