import React from 'react';

import {
  Container,
  DescriptionContainer,
  Image,
  ShoppingCart,
  Category,
  Title,
  ContainerPrice,
  Price,
  PriceOffert,
} from './styles';
import { Rating } from 'react-simple-star-rating';

type Props = {
  image: string;
  category: string;
  title: string;
  rating: number;
  price: number;
  offert: number;
  percentageOffert: number;
  isNew: boolean;
};

const ProductCard: React.FC<Props> = ({
  image,
  category,
  title,
  rating,
  price,
  offert,
  percentageOffert,
  isNew,
}: Props) => {
  return (
    <Container>
      <Image src={image} alt="product" />
      <DescriptionContainer>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Rating initialValue={rating} ratingValue={0} readonly size={20} />
        <ContainerPrice>
          <Price>${price}</Price>
          <PriceOffert>${offert}</PriceOffert>
        </ContainerPrice>
      </DescriptionContainer>
      <ShoppingCart />
    </Container>
  );
};

export default ProductCard;
