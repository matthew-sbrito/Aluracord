import styled from "styled-components";

type ContainerProps = {
  imageBackground: string;
};
export const Container = styled.main<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  background-image: ${({ imageBackground }) => `url(${imageBackground})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  width: 100vw;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-width: 800px;
  border-radius: 5px;
  padding: 30px;
  margin: 16px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  background-color: ${({ theme }) => theme.colors.neutrals[700]};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  text-align: center;
  margin-bottom: 32px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.neutrals[800]};
  color: ${({ theme }) => theme.colors.neutrals[200]};
  border: 1px solid ${({ theme }) => theme.colors.neutrals[900]};
  transition: all ease-in-out 300ms;
  outline: none;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.neutrals["000"]};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all ease-in-out 300ms;
  font-size: 0.9rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const BoxImage = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.neutrals[800]};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.neutrals[999]};
  border-radius: 10px;
  flex: 1;
  min-height: 240px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 16px;
`;

type TextNameProps = {
  background?: string | null;
};

export const TextName = styled.p<TextNameProps>`
  color: ${({ theme }) => theme.colors.neutrals[200]};
  background-color: ${({ background }) => background || "tranparent"};
  font-size: 0.9rem;
  padding: 3px 7px;
  border-radius: 1000px;
  margin: 7px;
`;
