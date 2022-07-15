import styled, { css } from 'styled-components';

interface ILineProps {
  complete?: boolean;
}

export const Line = styled.div<ILineProps>`
  height: 1.5px;
  background-color: ${(props) => props.theme.colors.primaryText}20;
  flex: 1;
  transition: all 0.4s;

  ${(props) =>
    props.complete &&
    css`
      background-color: ${(props) =>
        props.theme.colors.primaryRed || '#24a19c'};
      height: 2px;
    `}
`;

interface IPillsProps {
  complete?: boolean;
  active?: boolean;
  label?: string;
}

export const Pill = styled.div<IPillsProps>`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #999;
  transition: all 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.label &&
    css`
      &:after {
        position: absolute;
        content: '${props.label}';
        width: max-content;
        color: ${props.active || props.complete
          ? props.theme.colors.primaryRed || '#24a19c'
          : '#999'};
        font-weight: ${props.active ? 800 : 600};
        text-transform: uppercase;
        font-size: 11px;
        bottom: -25px;
        left: 50%;
        transform: translateX(-50%);
      }
    `}

  ${(props) =>
    props.active &&
    css`
      width: 50px;
      height: 50px;
      background-color: ${props.theme.colors.primaryRed || '#24a19c'};
    `}
  

  ${(props) =>
    props.complete &&
    css`
      width: 50px;
      height: 50px;
      background-color: ${props.theme.colors.primaryRed || '#24a19c'};
    `}

    @media(max-width: 640px) {
    ${(props) =>
      props.label &&
      css`
        &:after {
          content: '';
        }
      `}
  }
`;

// ${(props) =>
//     props.active &&
//     css`
//       width: 50px;
//       height: 50px;
//       background-color: ${props.theme.colors.primaryRed || '#24a19c'};

//       &:before {
//         position: absolute;
//         content: '';
//         background-color: #fff;
//         width: 8px;
//         height: 8px;
//         border-radius: 8px;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//       }
//     `}

// ${(props) =>
//     props.complete &&
//     css`
//       width: 20px;
//       height: 20px;
//       background-color: ${props.theme.colors.primaryRed || '#24a19c'};

//       &:before {
//         position: absolute;
//         content: '✓';
//         color: #fff;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//       }
//     `}
