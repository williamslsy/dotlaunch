import styled from 'styled-components';

export const SocialIcons = styled.a.attrs(() => ({
  className: ``,
}))`
  cursor: pointer;

  &:hover {
    i {
      transform: scale(1.1);
      opacity: 1;
    }
  }
  i {
    transition: all 0.3s;
    font-size: 40px;
    opacity: 0.7;
  }
`;
