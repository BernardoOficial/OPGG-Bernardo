import styled from "styled-components";

const Skew = styled.section`
  background-color: ${({ theme }) => theme.colors.secundo};
  transform: skew(0, -5deg) translateY(50px);

  @media (max-width: 500px) {
    transform: skew(0, -10deg) translateY(100px);
  }
`;

export default Skew;
