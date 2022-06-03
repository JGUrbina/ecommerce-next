import Head from 'next/head';
import React from 'react';
import Header from './components/Header/Header';

import { Container } from './styles';
import Hero from './components/Hero/Hero';

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ title, description, children }: Props) => {
  return (
    <Container>
      <Head>
        <title>{title ? title : 'E-commerce'}</title>

        <meta
          name="description"
          content={description ? description : 'Venta de mercancía'}
        />
      </Head>
      <Header />
      <Hero />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
