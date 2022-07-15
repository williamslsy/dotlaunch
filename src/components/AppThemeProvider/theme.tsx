import { DefaultTheme } from 'styled-components';
import tailwindConfig from '../../styles/tailwind.config';

const breakPoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '540px',
  tablet: '770px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const lightTheme: DefaultTheme = {
  colors: tailwindConfig.theme.extend.colors.custom.light,
  breakPoints,
};
export const darkTheme: DefaultTheme = {
  colors: tailwindConfig.theme.extend.colors.custom.dark,
  breakPoints,
};
