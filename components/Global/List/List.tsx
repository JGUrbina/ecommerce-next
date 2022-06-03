import React from 'react';

import { Container } from './styles';
type Props = {
  children: React.ReactNode | React.ReactNode[];
};
const List: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default List;
