import styled from 'styled-components';

interface ICardTheme {
  className?: string;
}

export const Card = styled.div.attrs<ICardTheme>(() => ({
  className: `shadow-lg py-8 px-5 rounded-md`,
}))<ICardTheme>`
  background: ${(props) => props.theme.colors.secondaryBackground};
  border: 1px solid ${(props) => props.theme.colors.primaryText}20;

  &.launch-card {
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      box-shadow: -1px 0px 16px 8px rgba(93, 0, 255, 0.2);
      transform: scale(1.01);
    }
  }
`;

export const CardIcon = styled.div.attrs<ICardTheme>(() => ({
  className: `shadow flex py-8 px-5`,
}))<ICardTheme>`
  background: ${(props) => props.theme.colors.secondaryRed};
  color: ${(props) => props.theme.colors.primaryRed};
  border-radius: 10rem;
  font-size: 2rem;
  font-weight: bolder;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardHeader = styled.h3.attrs<ICardTheme>(() => ({
  className: `font-bold text-2xl md:text-3xl`,
}))<ICardTheme>``;

export const CardSubHeader = styled.h3.attrs<ICardTheme>(() => ({
  className: `font-bold text-base md:text-xl`,
}))<ICardTheme>`
  color: ${(props) => props.theme.colors.primaryText}80;
`;

export const CardBody = styled.div.attrs<ICardTheme>(() => ({
  className: `text-base mt-8`,
}))<ICardTheme>``;
