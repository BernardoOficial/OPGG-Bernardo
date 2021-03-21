import styled from "styled-components";
// import { Link } from 'react-router-dom';

const Button = styled.button`
  margin-top: 30px;
  width: 17rem;

  padding: 6px 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secundo};

  color: ${({ theme }) => theme.colors.textoPreto};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-align: center;

  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.terceiro};
    transform: translateY(-10px);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.terceiro}77;
    transform: translateY(-10px);
    color: #ffffff;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export default Button;
