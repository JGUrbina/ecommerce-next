import React from 'react';

import { Container } from './styles';
type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const ListItem: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ListItem;
