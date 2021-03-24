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
  color: ${({ theme }) => theme.colors.textoBranco};

  a {
    display: inline-block;
    border-radius: 2px;
    padding: 10px 20px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.secundo};
    color: ${({ theme }) => theme.colors.textoPreto};

    &:hover {
      filter: brightness(90%);
    }
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    grid-template-rows: 250px 300px;
    border-radius: 10px;
    overflow: hidden;
  }

  @media (max-width: 500px) {
  }
`;

ContentColumn.SearchUser = styled.section`
    padding: 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

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

    @media (max-width: 820px) {
      max-width: 100%;
      margin: 3rem 4rem 1rem;
    }
  }
`;

export default ContentColumn;