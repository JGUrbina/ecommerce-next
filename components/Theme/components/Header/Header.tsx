import React from 'react';
import NextLink from 'next/link';

import { Container, Img } from './styles';
import Nav from './components/Nav/Nav';
import Link from '../../../Global/Link/Link';

const Header: React.FC = () => {
  return (
    <Container>
      <NextLink href="/" passHref>
        <Link>
          <Img src="/img/logo.png" alt="E-commerce" />
        </Link>
      </NextLink>

      <Nav />
    </Container>
  );
};

export default Header;
