import styled from 'styled-components';

interface IBadgeProps {
  color: 'primary' | 'secondary' | 'green' | 'warn';
  size?: string;
}

export const Badge = styled.span.attrs<IBadgeProps>(() => ({
  className: `px-3 py-1 inline rounded-lg`,
}))<IBadgeProps>`
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.colors.primaryBlue + '40'
      : props.color === 'secondary'
      ? props.theme.colors.primaryRed + '40'
      : props.color === 'green'
      ? '#21FCDB20'
      : props.color === 'warn'
      ? '#d2981320'
      : ''};

  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.colors.primaryBlue
      : props.color === 'secondary'
      ? props.theme.colors.primaryRed
      : props.color === 'green'
      ? '#21FCDB'
      : props.color === 'warn'
      ? '#d29813'
      : ''};

  font-weight: 600;
  font-size: ${(props) => props.size || '0.9rem'};
`;
