import styled from "styled-components";
import Select from "react-select";

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
  { value: "nenhum", label: "Escolha uma Categoria", disable: 'yes' },
  { value: "assassinos", label: "Assassinos" },
  { value: "tanque", label: "Tanque" },
  { value: "mago", label: "Mago" },
  { value: "atirador", label: "Atirador" },
  { value: "lutador", label: "Lutador" },
  { value: "suporte", label: "Suporte" },
];

const Filtrar = ({ className }) => {

    return (
        <form className={className}>
            <input
                name="campeao"
                type="text"
                placeholder="Pesquise pelo nome de um campeão"
            />
            <Select
                name="categoria"
                styles={customStyle}
                options={options}
                isOptionDisabled={(option) => option.disable === 'yes'}
                defaultValue={options[0]}
            />
        </form>
    );
}

const FiltrarCampeoes = styled(Filtrar)`
  display: flex;

  & > input {
    width: 17rem;
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