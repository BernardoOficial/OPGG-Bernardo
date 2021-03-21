import styled from "styled-components";

const Titulo = styled.h1`
  font-size: 4rem;
  color: ${({ textoBranco }) => textoBranco ? "#ffffff" : "#000000"};
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;

  span {
    margin-top: 2rem;
    display: block;
    font-size: 0.6rem;
    letter-spacing: 0.5px;
    color: ${({ spanTextoBranco }) => spanTextoBranco ? "#dddddd" : "#555555"};
  }
`;

const TituloContainer = styled(Titulo)`
  display: inline-block;
  margin: 2rem 0;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.secundo};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    /* background-color: red; */
    border-top: 70px solid ${({ theme }) => theme.colors.secundo};
    border-left: 70px solid ${({ theme }) => theme.colors.secundo};
    border-bottom: 70px solid transparent;
    border-right: 70px solid transparent;
  }
`;

export { Titulo as default, TituloContainer};