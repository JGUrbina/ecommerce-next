import React from 'react';

import { Container, Image, Text, Title } from './styles';

const ContactFooter: React.FC = () => {
  return (
    <Container>
      <Image src="img/logo.png" alt="logo-footer" />
      <Title>Contact</Title>
      <Text>
        <strong>Adress:</strong> 562 Wellington Road, Street 32, San Francisco
      </Text>
      <Text>
        <strong>Phone:</strong> +1 (123) 456-7890 / +1 (123) 456-7891
      </Text>
      <Text>
        <strong>Adress:</strong> 10:00 - 18:00, Monday - Saturday
      </Text>
    </Container>
  );
};

export default ContactFooter;
