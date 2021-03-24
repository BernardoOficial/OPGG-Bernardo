import { useContext, useState } from "react";
import styled from "styled-components";
import Select from "react-select";

import { CampeoesContext } from "../../Context/CampeoesContext";

const customStyle = {
  container: (provided) => ({
    ...provided,
    width: "17rem",
    minHeight: "3rem",
    height: "3rem",
    zIndex: 2
  }),
  control: (provided) => ({
    ...provided,
    height: "3rem",
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "3rem",
    position: 'initial'
  }),
  singleValue: (provided) => ({
      ...provided,
      top: '50%',
      transform: 'translateY(-50%)',
      lineHeight: '3rem'
  })
};

const options = [
  { value: "", label: "Escolha uma Categoria" },
  { value: "Assassin", label: "Assassinos" },
  { value: "Tank", label: "Tanque" },
  { value: "Mage", label: "Mago" },
  { value: "Marksman", label: "Atirador" },
  { value: "Fighter", label: "Lutador" },
  { value: "Support", label: "Suporte" },
];


const Filtrar = ({ className }) => {

  const { filtrarCampeoes } = useContext(CampeoesContext);
  
  const [searchCampeao, setSearchCampeao] = useState({
    campeaoBuscado: "",
    categoriaBuscada: ""
  });
  
  const handleInput = evento => {
    const { name, value } = evento.target;

    setSearchCampeao(currentState => {
      const newState = { ...currentState, [name]: value };
      filtrarCampeoes(newState);
      return newState;
    })
  }
  
  const handleSelect = evento => {
    const { value } = evento;

    setSearchCampeao(currentState => {
      const newState = { ...currentState, categoriaBuscada: value };
      filtrarCampeoes(newState);
      return newState
    })
  }

  return (
      <form className={className}>
          <input
              name="campeaoBuscado"
              type="text"
              value={searchCampeao.campeaoBuscado}
              placeholder="Pesquise pelo nome de um campeão"
              onInput={handleInput}
          />
          <Select
              name="categoriaBuscada"
              styles={customStyle}
              options={options}
              isOptionDisabled={(option) => option.disable === 'yes'}
              defaultValue={options[0]}
              onChange={handleSelect}
          />
      </form>
  );
}

const FiltrarCampeoes = styled(Filtrar)`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  & > input {
    width: 20rem;
    height: 3rem;
    border-radius: 4px;
    padding: 0 10px;
    border: none;
    outline: none;
    box-shadow: 0 0 0 1px #ccc;
    margin-right: 2rem;

    font-size: 1rem;
    font-weight: 400;
    color: #222222;

    @media (max-width: 600px) {
      margin: 0 0 1rem;
    }

    &::placeholder {
      color: #333;
    }

    &:hover,
    &:focus {
      box-shadow: 0 0 0 2px #2783fe;
    }
  }

  & > div {
  }
`;

export default FiltrarCampeoes;