import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  z-index: 2;

  ${(props) => props.isSkew && "transform: skew(0, 5deg);"}

  @media (max-width: 500px) {
    padding: 0 20px;
    ${(props) => props.isSkew && "transform: skew(0, 10deg);"}
  }
`;

export default Wrapper;