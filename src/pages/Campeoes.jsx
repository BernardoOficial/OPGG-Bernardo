import React from 'react'

import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import { TituloContainer } from '../components/Titulo'
import FiltrarCampeoes from '../components/FiltrarCampeoes'
import ListaCampeoes from '../components/ListaCampeoes'

const Campeoes = () => {

    return (
        <Wrapper>
            <Header>
                <TituloContainer>
                    Campeões
                    <span>Conheça todos os campeões do jogo</span>
                </TituloContainer>
                <FiltrarCampeoes />
            </Header>
            <ListaCampeoes />
        </Wrapper>
    )
}

export default Campeoes