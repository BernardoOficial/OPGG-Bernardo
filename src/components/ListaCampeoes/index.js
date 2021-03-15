import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { buscarCampeoes } from '../../fetch';
import ItemCampeao from './ItemCampeao';

const Lista = ({className}) => {

    const [campeoes, setCampeoes] = useState({});

    // console.log(Object.values(campeoes));
    // console.log(Object.keys(campeoes));
    // console.log(Object.entries(campeoes));
    // console.log(campeoes);
    const nameCampeoes = Object.keys(campeoes);
    console.log(campeoes);

    useEffect(() => {

        buscarCampeoes()
            .then(campeoes => setCampeoes(campeoes))
            .catch(error => console.log(error))

    }, [])

    return (
        <ul className={className}>
            Lista de campeões
            {nameCampeoes.map(nome => (
                <ItemCampeao
                key={campeoes[nome].key}
                idName={campeoes[nome].id}
                name={campeoes[nome].name}
                resumehistory={campeoes[nome].blurb}
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
    gap: 3rem;
    margin-top: 4rem;
`

export default ListaCampeoes;