import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;

export default function Step(props: {
  children: React.ReactNode;
  label: string;
  icon?: React.ReactNode;
}) {
  return <Container {...props}>{props.children}</Container>;
}
