import type { NextPage } from 'next';
import Banner from '../components/Home/Banner/Banner';
import Feature from '../components/Theme/components/Feature/Feature';
import SectionProducts from '../components/Home/SectionProducts/SectionProducts';
import Hero from '../components/Home/Hero/Hero';
import Layout from '../components/Theme/Layout';
import { data } from '../utils/data/products';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Feature />
      <SectionProducts
        title="Feature Products"
        subTitle="Summer Collection New Morder Design"
        products={data.productsFeature}
      />
      <Banner />
      <SectionProducts
        title="New Arrivals"
        subTitle="Summer Collection New Morder Design"
        products={data.productsArrivals}
      />
    </Layout>
  );
};

export default Home;
