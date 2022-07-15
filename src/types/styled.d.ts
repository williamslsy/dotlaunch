// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBackground: string;
      secondaryBackground: string;
      primaryText: string;
      primaryRed: string;
      secondaryRed: string;
      primaryBlue: string;
      secondaryBlue: string;
      outline: string;
    };
    breakPoints: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
  }
}
