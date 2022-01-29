import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import { Title } from "../components/Title";
import { useMyTheme } from "../contexts/theme";

import {
  TextName,
  Image,
  BoxImage,
  Button,
  InputField,
  Form,
  Content,
  Container,
} from "./styles";

const Home: NextPage = () => {
  const [userName, setUserName] = useState<string>("matthew-sbrito");
  const [userGitHub, setUserGitHub] = useState<string>("matthew-sbrito");

  const router = useRouter();

  const { theme } = useMyTheme();

  function handleInput(event: any): void {
    const valor = event.target.value;
    setUserName(valor);
    if (valor.length > 3) return setUserGitHub(valor);
    setUserGitHub("");
  }

  function handleSubmit(event: any): void {
    event.preventDefault();
    router.push("/chat");
  }

  return (
    <Container
      imageBackground={
        "https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg"
      }
    >
      <Content>
        <Form onSubmit={handleSubmit}>
          <Title>Boas vindas de volta!</Title>
          <TextName>{userGitHub}</TextName>
          <InputField value={userName} onChange={handleInput} />
          <Button type="submit">Entrar</Button>
        </Form>
        <BoxImage>
          <Image
            src={`https://github.com/${userGitHub}.png`}
            alt="user-github"
          />
          {userGitHub && (
            <TextName background={theme.colors.neutrals[900]}>
              {userGitHub}
            </TextName>
          )}
        </BoxImage>
      </Content>
    </Container>
  );
};

export default Home;
