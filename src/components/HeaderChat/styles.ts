import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 25px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

export const Text = styled.h5`
  color: #fff;
  font-size: 2rem;
`;

export const Button = styled.button`
  font-size: 2rem;
  background-color: transparent;
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutrals['400']}
`;