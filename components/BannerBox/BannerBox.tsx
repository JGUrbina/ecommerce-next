import React from 'react';

import {
  Container,
  Title,
  SubtitleSm,
  SubtitleXs,
  Description,
  Button,
} from './styles';
import NextLink from 'next/link';

type Props = {
  image: string;
  type: string;
  category?: string;
  title: string;
  subTitle: string;
  description?: string;
  textButton?: string;
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
    <Container image={image} type={type}>
      {type === 'sm' && <SubtitleSm>{subTitle}</SubtitleSm>}
      <Title type={type}>{title}</Title>
      {type === 'xs' && <SubtitleXs>{subTitle}</SubtitleXs>}
      {type === 'sm' && <Description>{description}</Description>}
      {type === 'sm' && (
        <Button>
          <NextLink href={category ? category : ''} passHref>
            <a>{textButton}</a>
          </NextLink>
        </Button>
      )}
    </Container>
  );
};

export default BannerBox;
