import React from 'react';

import { Container, ProductContainer } from './styles';
import ProductCard from './components/Product/ProductCard';
import { data, IProduct } from '../../../../utils/data/data';

const FeatureProducts: React.FC = () => {
  return (
    <Container>
      <h2>Feature Products</h2>
      <p>Summer Collection New Morder Design</p>
      <ProductContainer>
        {data.products.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            image={product.image}
            category={product.category}
            title={product.title}
            rating={product.rating}
            price={product.price}
            offert={product.offert}
            percentageOffert={product.percentageOffert}
            isNew={product.isNew}
          />
        ))}
      </ProductContainer>
    </Container>
  );
};

export default FeatureProducts;
