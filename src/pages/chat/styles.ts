import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.neutrals[700]};
  height: 100%;
  max-width: 95%;
  max-height: 95vh;
  padding: 32px;
`;

export const ChatContent = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.neutrals[600]};
  flex-direction: column;
  border-radius: 5px;
  padding: 16px;
`;

export const ChatTextArea = styled.section`
  display: flex;
  align-items: center;

  input {
    height: 70px;
    width: 100%;
    font-size: 1rem;
    border: 0;
    resize: none;
    border-radius: 5px;
    padding: 8px 10px;
    background-color: ${({ theme }) => theme.colors.neutrals[800]};
    margin-right: 12px;
    color: ${({ theme }) => theme.colors.neutrals[200]};
    outline: none;
  }
`
