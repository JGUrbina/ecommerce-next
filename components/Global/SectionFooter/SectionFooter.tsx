import React from 'react';

import { Container, Link, Title } from './styles';
import NextLink from 'next/link';

type ITextProps = {
  children: string;
  page: string;
};

export const TextSectionFooter: React.FC<ITextProps> = ({
  children,
  page,
}: ITextProps) => {
  return (
    <NextLink href={page} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};

type ITitleProps = {
  children: string;
};
export const TitleSectionFooter: React.FC<ITitleProps> = ({
  children,
}: ITitleProps) => {
  return <Title>{children}</Title>;
};

type ISectionFooterProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const SectionFooter: React.FC<ISectionFooterProps> = ({
  children,
}: ISectionFooterProps) => {
  return <Container>{children}</Container>;
};

export default SectionFooter;
