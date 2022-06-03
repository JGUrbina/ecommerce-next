import React from 'react';
import { useRouter } from 'next/router';
import { Container, Link, ShoppingBagIcon } from './styles';
import List from '../../../Global/List/List';
import NextLink from 'next/link';
import ListItem from '../../../Global/ListItem/ListItem';

const Nav: React.FC = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Container>
      <List>
        <ListItem>
          <NextLink href="/" passHref>
            <Link active={router.pathname === '/'}>Home</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="shop" passHref>
            <Link active={router.pathname === '/shop'}>Shop</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="blog" passHref>
            <Link active={router.pathname === '/blog'}>Blog</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="about" passHref>
            <Link active={router.pathname === '/about'}>About</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="contact" passHref>
            <Link active={router.pathname === '/contact'}>Contact</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="cart" passHref>
            <Link active={router.pathname === '/cart'}>
              <ShoppingBagIcon />
            </Link>
          </NextLink>
        </ListItem>
      </List>
    </Container>
  );
};

export default Nav;
