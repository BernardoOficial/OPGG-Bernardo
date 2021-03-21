import React from 'react'

import Skew from '../components/Skew'
import Wrapper from '../components/Wrapper'
import ContentColumn from '../components/ContentColumn'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Formulario from '../components/Formulario'

const Home = () => {

    return (
        <Skew>
            <Wrapper isSkew={true}>
                <Container>
                    <ContentColumn>
                        <ContentColumn.SearchUser>
                            <ContentColumn.Titulo>
                                OPGG
                                <span>Estatísticas de jogadores e campeões</span>
                            </ContentColumn.Titulo>
                        
                            <Formulario />
                        </ContentColumn.SearchUser>

                        <ContentColumn.Wallpaper>
                            <h2>Quer visualizar todos os campeões do jogo? Acesse o link abaixo.</h2>
                            <Link to="/campeoes">Acessar</Link>
                        </ContentColumn.Wallpaper>
                    </ContentColumn>
                </Container>
            </Wrapper>
        </Skew>
    )
}

export default Home