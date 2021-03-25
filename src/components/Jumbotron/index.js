import styled from "styled-components";

const Base = ({ className, name, title, lore }) => {

    return (
      <div className={className}>
        <h1>{name}</h1>
        <h3>{title}</h3>
        <div>
          <p>{lore}</p>
        </div>
      </div>
    );
}

const Jumbotron = styled(Base)`
  width: 100%;
  max-width: 600px;
  margin: 3rem auto 0;
  color: #ffffff;

  h1 {
    font-size: 3rem;
    line-height: 3rem;
  }

  h3 {
    font-size: 1rem;
    line-height: 1rem;
  }

  & > div {
    margin-top: 5rem;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 3rem;
    color: ${({ theme }) => theme.colors.textoCinza};

    p {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
`;

export default Jumbotron;