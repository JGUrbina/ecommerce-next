import React from 'react';

import { Container } from './styles';
import NewsText from '../../Global/NewsText/NewsText';
import NewsForm from '../../Global/NewsForm/NewsForm';

const NewsLetter: React.FC = () => {
  return (
    <Container>
      <NewsText />
      <NewsForm />
    </Container>
  );
};

export default NewsLetter;
