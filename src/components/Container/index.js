import styled from "styled-components";

const Container = styled.section`
  display: flex;
  padding: 0 20px;

  ${({ alignItemsCenter }) => alignItemsCenter && "align-items: center;"}
`;

export default Container;