import React from 'react';

import { Container } from './styles';
type Props = {
  children: React.ReactNode | React.ReactNode[];
};
const Link: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Link;
