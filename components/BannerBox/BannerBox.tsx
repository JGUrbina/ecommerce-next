import React from 'react';

import { Container, Title, Subtitle, Description, Button } from './styles';
import NextLink from 'next/link';

type Props = {
  image: string;
  type: string;
  category: string;
  title: string;
  subTitle: string;
  description: string;
  textButton: string;
  children?: React.ReactNode | React.ReactNode[];
};

const BannerBox: React.FC<Props> = ({
  image,
  type,
  category,
  title,
  subTitle,
  description,
  textButton,
  children,
}: Props) => {
  return (
    <Container image={image}>
      <Subtitle>{subTitle}</Subtitle>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>
        <NextLink href={category} passHref>
          <a>{textButton}</a>
        </NextLink>
      </Button>
    </Container>
  );
};

export default BannerBox;
