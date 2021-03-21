import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import SearchInput from "./SearchInput";
// import fetchData from "../../data/fetchData/fetchData";
// import MensagemErro from "../Mensagem";

const Form = ({ className }) => {
  const [username, setUsername] = useState("");
  // const [temErro, setTemErro] = useState(false);
  const disableButton = username.length <= 2;

  // const fecharMensagemErro = () => {
  //   setTemErro(false);
  // };

  // const history = useHistory();

  useEffect(() => {}, []);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    // const urlUser = `https://api.github.com/users/${username}`;

    // fetchData(urlUser)
    //   .then((response) => {
    //     console.log(response);
    //     history.push(`perfil/${username}`);
    //   })
    //   .catch((erro) => {
    //     console.log(erro);
    //     setTemErro(true);
    //   });
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
        {/* {temErro && <MensagemErro fecharMensagemErro={fecharMensagemErro} />} */}
        <p>Entre com o username para mais informações do jogador.</p>
        <SearchInput name="username" setUsername={setUsername} />
        <Button disabled={disableButton}>Buscar user</Button>
      </form>
  );
};

const Formulario = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  animation: show 1s linear forwards;

  & > p {
    font-size: 0.9rem;
    line-height: 1.2rem;
    text-align: center;
  }

  @keyframes show {
    from {
      opacity: 0.5;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export default Formulario;
