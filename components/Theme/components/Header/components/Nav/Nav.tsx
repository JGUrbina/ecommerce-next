import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Link,
  ShoppingBagIcon,
  List,
  ListItem,
  Closed,
  IconMenu,
} from './styles';
import NextLink from 'next/link';

const Nav: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);
  return (
    <Container>
      <List open={open}>
        <Closed onClick={handleClick} />
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
      <IconMenu onClick={handleClick} />
    </Container>
  );
};

export default Nav;
