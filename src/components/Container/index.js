import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 0 20px;
  display: flex;
  ${({ alignItemsCenter }) => alignItemsCenter && "align-items: center;"}
  ${({ background }) => background && `background-color: ${background};`} 
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`} 
`;

export default Container;