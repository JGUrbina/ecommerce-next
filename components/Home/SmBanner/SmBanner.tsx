import React from 'react';
import BannerBox from '../../Global/BannerBox/BannerBox';

import { Container } from './styles';

const SmBanner: React.FC = () => {
  return (
    <Container>
      <BannerBox
        image="img/banner/b17.jpg"
        title="buy 1 get 1 free"
        subTitle="carzy deals"
        description="The best classic dress is on sale at cara"
        textButton="Learn More"
        type="sm"
        category="shirt"
      />
      <BannerBox
        image="img/banner/b10.jpg"
        title="buy 1 get 1 free"
        subTitle="carzy deals"
        description="The best classic dress is on sale at cara"
        textButton="Learn More"
        type="sm"
        category="shirt"
      />
    </Container>
  );
};

export default SmBanner;
