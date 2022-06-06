import React from 'react';
import ContactFooter from '../../../Global/ContactFooter/ContactFooter';
import SectionFooter, {
  TextSectionFooter,
  TitleSectionFooter,
} from '../../../Global/SectionFooter/SectionFooter';

import { Container, Copyright } from './styles';
import InstallFooter from '../../../Global/InstallFooter/InstallFooter';

const Footer: React.FC = () => {
  return (
    <Container>
      <ContactFooter />
      <SectionFooter>
        <TitleSectionFooter>About</TitleSectionFooter>
        <TextSectionFooter page={'about-us'}>About us</TextSectionFooter>
        <TextSectionFooter page={'delivery-information'}>
          Delivery Information
        </TextSectionFooter>
        <TextSectionFooter page={'privacy-policy'}>
          Privacy Policy
        </TextSectionFooter>
        <TextSectionFooter page={'terms-conditions'}>
          Terms & Conditions
        </TextSectionFooter>
        <TextSectionFooter page={'contact-us'}>Contact Us</TextSectionFooter>
      </SectionFooter>
      <SectionFooter>
        <TitleSectionFooter>My Account</TitleSectionFooter>
        <TextSectionFooter page={'sign-in'}>Sign In</TextSectionFooter>
        <TextSectionFooter page={'view-cart'}>View Cart</TextSectionFooter>
        <TextSectionFooter page={'my-wishlist'}>My WishList</TextSectionFooter>
        <TextSectionFooter page={'track-order'}>
          Track My Order
        </TextSectionFooter>
        <TextSectionFooter page={'help'}>Help</TextSectionFooter>
      </SectionFooter>
      <InstallFooter />
      <Copyright>
        <p>© 2021, E-commerce Nextjs</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
