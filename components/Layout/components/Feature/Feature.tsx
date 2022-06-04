import React from 'react';

import { Container } from './styles';
import FeBox from './components/Fe-box/FeBox';

const Feature: React.FC = () => {
  return (
    <Container>
      <FeBox
        image="img/features/f1.png"
        title="Free Shopping"
        color="#FDDDE4"
      />
      <FeBox image="img/features/f2.png" title="Online Order" color="#CDEBBC" />
      <FeBox image="img/features/f3.png" title="Save Money" color="#D1E8F2" />
      <FeBox image="img/features/f4.png" title="Promotions" color="#CDD4F8" />
      <FeBox image="img/features/f5.png" title="Happy Sell" color="#F6DBF6" />
      <FeBox
        image="img/features/f6.png"
        title="F24/7 Support"
        color="#FFF2E5"
      />
    </Container>
  );
};

export default Feature;
