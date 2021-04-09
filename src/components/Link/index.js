import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
    position: absolute;
    top: 1rem;
    padding: 10px 15px;
    border-radius: 15%;
    background-color: ${({ theme }) => theme.colors.primeiro};
    color: ${({ theme }) => theme.colors.branco};
`;

export default LinkStyled;