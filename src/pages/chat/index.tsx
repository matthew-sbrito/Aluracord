import React, { useEffect, useRef, useState } from "react";

import HeaderChat from "../../components/HeaderChat";
import MessageList, { Message } from "../../components/MessageList";
import { Container } from "../styles";

import { ChatContent, Content, ChatTextArea } from "./styles";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const textAreaRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    console.log(textAreaRef.current?.value);
  }, [textAreaRef]);

  function handleNewMessage() {
   if(textAreaRef.current) {
     const message = {
       id: (messages.length + 1).toString(),
       de: 'matthew-sbrito',
       text: textAreaRef.current.value,
     };
     setMessages([...messages, message]);
   }
   
   if(textAreaRef.current) {
    textAreaRef.current.value = "";
   }
  }

  function handleKeyPress(e: any) {
    if (e.key !== "Enter") return;
    handleNewMessage();
  }

  return (
    <Container
      imageBackground={
        "https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg"
      }
    >
      <Content>
        <HeaderChat />
        <ChatContent>
          <MessageList messages={messages} />
          <ChatTextArea>
            <input
              ref={textAreaRef}
              type="text-area"
              onKeyPress={handleKeyPress}
              placeholder="Insira sua mensagem aqui..."
            />
          </ChatTextArea>
        </ChatContent>
      </Content>
    </Container>
  );
};

export default Chat;
