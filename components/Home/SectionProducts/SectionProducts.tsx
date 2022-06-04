import React from 'react';

import { Container, ProductContainer } from './styles';
import ProductCard from '../../ProductCard/ProductCard';
import { data, IProduct } from '../../../utils/data/products';

type Props = {
  title: string;
  subTitle: string;
  products: IProduct[];
};

const SectionProducts: React.FC<Props> = ({
  title,
  subTitle,
  products,
}: Props) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <ProductContainer>
        {products.map((product: IProduct) => (
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

export default SectionProducts;
