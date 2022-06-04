import React from 'react';
import { Button, Container, Subtitle, Title } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <Subtitle>Repair Services</Subtitle>
      <Title>
        Up to <span>70% off</span> - all T-Shirts & Accessories
      </Title>
      <Button>Explore More</Button>
    </Container>
  );
};

export default Banner;
