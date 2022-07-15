import styled, { ThemeProps } from 'styled-components';

interface INavMenu {
  mobileOpen: boolean;
}

export const NavBar = styled.div.attrs(() => ({
  className:
    'flex justify-between container 2xl px-5 md:px-20 z-1 items-center ',
}))``;

export const NavMenu = styled.div.attrs<INavMenu>(() => ({
  className: `flex lg:flex-row px-5 flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-center`,
}))<INavMenu>`
  a {
    font-weight: 400;
  }
  @media (max-width: 1023px) {
    position: fixed;
    top: 0;
    right: 0;
    left:0;
    background:  ${(props) => props.theme.colors.primaryBackground};
    z-index: 5;
    height: 100vh;
    overflow-y: hidden;
    width: 100%;
    transform: ${(props) => (props.mobileOpen ? 'scale(1,1)' : 'scale(0)')};
    transition: transform 0.5s ease;
    text-align: left !important;
    padding-top: 4rem;
    padding-bottom: 2rem;
    flex-direction: column;
    
    a{
      font-weight:700;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }
    
    transform: ${(props) =>
      props.mobileOpen ? 'translateY(0%)' : 'translateY(-100%)'}
      display: flex
      max-width: 350px

  }
`;

export const ToggleButton = styled.button.attrs(() => ({
  className: 'z-10 cursor-pointer lg:hidden',
}))``;

export const IconsLink = styled.button.attrs(() => ({
  className: `rounded-full mx-1 lg:mx-2`,
}))`
  background: transparent;
  font-size: 20px;
  padding: 0.3rem 0.6rem;
  color: #3a3a3a;

  &:hover {
    background: #f4f4f4;
  }
`;
