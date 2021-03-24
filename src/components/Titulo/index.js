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
  padding: 1.9rem;
  background-color: ${({ theme }) => theme.colors.secundo};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    /* background-color: red; */
    border-top: 4.375rem solid ${({ theme }) => theme.colors.secundo};
    border-left: 4.375rem solid ${({ theme }) => theme.colors.secundo};
    border-bottom: 4.375rem solid transparent;
    border-right: 4.375rem solid transparent;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export { Titulo as default, TituloContainer};