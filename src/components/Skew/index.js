import styled from "styled-components";

const Skew = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.secundo};
  transform: skew(-30deg);
`;

export default Skew;
