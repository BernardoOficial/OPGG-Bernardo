import React from 'react'
import { Link } from 'react-router-dom'

import Skew from '../components/Skew'
import Wrapper from '../components/Wrapper'
import Titulo from '../components/Titulo'
import ContentColumn from '../components/ContentColumn'
import Container from '../components/Container'
import Formulario from '../components/Formulario'

const Home = () => {

    return (
        <Skew>
            <Container alignItemsCenter>
                <Wrapper isSkew={true}>
                    <ContentColumn>
                        <ContentColumn.SearchUser>
                            <Titulo textoBranco spanTextoBranco>
                                OPGG
                                <span>Estatísticas de jogadores e campeões</span>
                            </Titulo>
                        
                            <Formulario />
                        </ContentColumn.SearchUser>

                        <ContentColumn.Wallpaper>
                            <h2>Quer visualizar todos os campeões do jogo? Acesse o link abaixo.</h2>
                            <Link to="/campeoes">Acessar</Link>
                        </ContentColumn.Wallpaper>
                    </ContentColumn>
                </Wrapper>
            </Container>
        </Skew>
    )
}

export default Home