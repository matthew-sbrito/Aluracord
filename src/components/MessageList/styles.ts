import styled from "styled-components";

export const Container = styled.ul`
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  list-style: none;
  flex: 1;
  color: ${({ theme }) => theme.colors.neutrals["000"]};
  margin-bottom: 16px;
  padding: 20px;
`;

export const MessageBox = styled.li`
  border-radius: 5px;
  padding: 6px;
  margin-bottom: 12px;
  
  &hover{
    background-color: ${({ theme }) => theme.colors.neutrals[900]};
  }
`;

export const Box = styled.div`
  margin-bottom: 8px;

  span {
    font-size: 10px;
    margin-left: 8px;
    color: ${ ({ theme }) => theme.colors.neutrals[300]}
  }
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`;