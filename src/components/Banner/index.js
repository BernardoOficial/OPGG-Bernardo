import styled from "styled-components";

const Banner = styled.header`
    background-image: url(${({ srcImage }) => srcImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;

    width: 100%;
    height: 100%;
    min-height: 200px;
    max-height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;

    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;

    @media (max-width: 500px) {
        max-height: 350px;
    }
`;

export default Banner;