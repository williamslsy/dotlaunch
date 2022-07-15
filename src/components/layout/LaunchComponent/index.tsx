import styled from 'styled-components';

export const LaunchInfoText = styled.p.attrs(() => ({
  className: `flex justify-between`,
}))`
  span {
    font-weight: bold;
    opacity: 0.8;
    font-size: 0.9rem;
    overflow-wrap: anywhere;
  }
`;
