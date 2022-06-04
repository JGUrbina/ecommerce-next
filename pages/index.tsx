import type { NextPage } from 'next';
import Banner from '../components/Layout/components/Banner/Banner';
import Feature from '../components/Layout/components/Feature/Feature';
import FeatureProducts from '../components/Layout/components/FeatureProducts/FeatureProducts';
import Hero from '../components/Layout/components/Hero/Hero';

import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Feature />
      <FeatureProducts />
      <Banner />
    </Layout>
  );
};

export default Home;
