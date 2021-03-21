import styled from 'styled-components';
import wallpaper from '../../assets/images/wallpaper.jpg'

const ContentColumn = styled.section`
    display: grid;

    width: 100%;
    grid-template-columns: 400px 1fr;
    grid-template-rows: 600px;
    
    align-content: center;
    
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    background-color: ${({ theme }) => theme.colors.primeiro};
    color: ${({ theme}) => theme.colors.textoBranco};

    a {
        display: inline-block;
        border-radius: 2px;
        padding: 10px 15px;
        background-color: ${({ theme }) => theme.colors.secundo};
        color: ${({ theme }) => theme.colors.textoPreto};

        &:hover {
            filter: brightness(90%);
        }
    }

`

ContentColumn.SearchUser = styled.section`
    padding: 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

ContentColumn.Titulo = styled.h1`
    font-size: 4rem;
    color: #ffffff;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;

    span {
        margin-top: 1rem;
        display: block;
        font-size: 0.6rem;
        letter-spacing: 0.5px;
        color: #dddddd;
    }
`

ContentColumn.Wallpaper = styled.section`
  background: url(${wallpaper}) no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    max-width: 400px;
    text-align: center;
    margin-bottom: 1rem;

    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 1px;
  }
`;

export default ContentColumn;