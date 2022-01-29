import React from "react";

import { Box, Container, Image, MessageBox } from "./styles";

export type Message = {
  id: string;
  de: string;
  text: string;
}

type MessageListProps = {
  messages: Message[];
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message: Message) => {
        return (
          <MessageBox key={message.id}>
            <Box>
              <Image
                alt="img-user"
                src={`https://github.com/${message.de}.png`}
              />
              <strong>{message.de}</strong>
              <span>{new Date().toLocaleDateString() }</span>
            </Box>
            {message.text}
          </MessageBox>
        );
      })}
    </Container>
  );
};

export default MessageList;
