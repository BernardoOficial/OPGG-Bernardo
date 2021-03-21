import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  ${(props) => props.isSkew && 'transform: skew(30deg);'}
`;

export default Wrapper;