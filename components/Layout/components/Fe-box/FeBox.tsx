import React from 'react';

import { Container, Image, Title } from './styles';
type Props = {
  image: string;
  title: string;
  color: string;
};
const FeBox: React.FC<Props> = ({ image, title, color }: Props) => {
  return (
    <Container>
      <Image src={image} alt={title} />
      <Title color={color}>{title}</Title>
    </Container>
  );
};

export default FeBox;
