import React from 'react';

import { Container, Title, Description } from './styles';

const NewsText: React.FC = () => {
  return (
    <Container>
      <Title>Sign Up For Newsletters</Title>
      <Description>
        Get E-mail updates about our latest shop <span>special offers.</span>{' '}
      </Description>
    </Container>
  );
};

export default NewsText;
