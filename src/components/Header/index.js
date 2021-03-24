import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

     @media (max-width: 1280px) {
        flex-direction: column;
    }
`

export default Header;