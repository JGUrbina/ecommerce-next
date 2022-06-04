import React from 'react';

import { Button, Container, Form, Input } from './styles';

const NewsForm: React.FC = () => {
  return (
    <Container>
      <Form>
        <Input type="text" placeholder="Your email address" />
        <Button>Sign Up</Button>
      </Form>
    </Container>
  );
};

export default NewsForm;
