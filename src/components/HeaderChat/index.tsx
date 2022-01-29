import { useRouter } from 'next/router';
import React from 'react';

import { Button, Container, Text } from './styles';

const HeaderChat: React.FC = () => {

  const router = useRouter();

  function logout() {
    router.push("/");
  }

  return (
    <Container>
      <Text>
        Chat
      </Text>
      <Button onClick={logout}>
        Logout
      </Button>
    </Container>
  );
}

export default HeaderChat;