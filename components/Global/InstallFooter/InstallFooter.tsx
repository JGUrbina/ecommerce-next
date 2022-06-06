import React from 'react';

import { Container, Title, Description, ContainerImg, Img } from './styles';

const InstallFooter: React.FC = () => {
  return (
    <Container>
      <Title>Install App</Title>
      <Description>From App Store Or Google Play</Description>
      <ContainerImg>
        <Img src="img/pay/app.jpg" alt="App Store" />
        <Img src="img/pay/play.jpg" alt="Google Play" />
      </ContainerImg>
      <Description>Secure Payment Gateways</Description>
      <Img src="img/pay/pay.png" alt="Credit Cards" />
    </Container>
  );
};

export default InstallFooter;
