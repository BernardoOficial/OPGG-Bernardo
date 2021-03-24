import React, { useContext } from 'react'
import styled from 'styled-components';
import { CampeoesContext } from "../../Context/CampeoesContext";

import ItemCampeao from './ItemCampeao';

const Lista = ({ className }) => {

    const { campeoes, campeoesVisualizados } = useContext(CampeoesContext);

    return (
        <ul className={className}>
            {campeoesVisualizados.map((nome, index) => (
                <ItemCampeao
                    index={index}
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

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        gap: 0; 
        row-gap: 1.5rem; 
    }
`

export default ListaCampeoes;