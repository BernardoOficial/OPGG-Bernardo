import React, { useContext } from 'react'
import styled from 'styled-components';
import { CampeoesContext } from "../../Context/CampeoesContext";

import ItemCampeao from './ItemCampeao';

const Lista = ({ className }) => {

    const { campeoes, nameCampeoes } = useContext(CampeoesContext);

    return (
        <ul className={className}>
            {nameCampeoes.map(nome => (
                <ItemCampeao
                key={campeoes[nome].key}
                idName={campeoes[nome].id}
                name={campeoes[nome].name}
                tags={campeoes[nome].tags}
              />
            )
            )}
        </ul>
    );
}

const ListaCampeoes = styled(Lista)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    margin-top: 4rem;
`

export default ListaCampeoes;