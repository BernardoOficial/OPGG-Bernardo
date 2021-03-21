import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 16px;
        line-height: 1.5rem;

        @media (max-width: 900px) {
            font-size: 13px;
        }
        
        @media (max-width: 500px) {
            font-size: 10px;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    button, input {
        display: inline-block;
        background-color: transparent;
        font-size: 10px;
        font-family: "Poppins", sans-serif;
    }

    body {
        font-family: "Poppins", sans-serif;
        overflow-x: hidden;
    }

    
`;

const theme = {
    colors: {
        branco: '#ffffff',
        preto: '#121212',
        primeiro: "#100D02",
        secundo: "#F9BA0D",
        terceiro: "#ffffff",
        quarta: '#232324',
        textoBranco: "#ffffff",
        textoPreto: "#444444",
        tituloBranco: "#ffffff",
        tituloPreto: "#444444"
    }
}

export {
    GlobalStyle,
    theme
}
