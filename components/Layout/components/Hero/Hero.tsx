import React from 'react';

import { Container, Button } from './styles';

const Hero: React.FC = () => {
  return (
    <Container image="img/hero4.png">
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all Products</h1>
      <p>Save more with coupons & up to 70% off!</p>
      <Button image="img/button.png">Shop Now</Button>
    </Container>
  );
};

export default Hero;
