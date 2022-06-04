import React from 'react';
import BannerBox from '../../Global/BannerBox/BannerBox';

import { Container } from './styles';

const XsBanner: React.FC = () => {
  return (
    <Container>
      <BannerBox
        image="img/banner/b7.jpg"
        title="SEASONAL SALE"
        subTitle="Winter Collection -50% off"
        type="xs"
        category="shirt"
      />
      <BannerBox
        image="img/banner/b4.jpg"
        title="SEASONAL SALE"
        subTitle="Winter Collection -50% off"
        type="xs"
        category="shirt"
      />
      <BannerBox
        image="img/banner/b18.jpg"
        title="SEASONAL SALE"
        subTitle="Winter Collection -50% off"
        type="xs"
        category="shirt"
      />
    </Container>
  );
};

export default XsBanner;
