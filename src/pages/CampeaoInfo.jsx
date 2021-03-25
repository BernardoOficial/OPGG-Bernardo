import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { buscarMaisInfoCampeao } from "../fetch";

const CampeaoInfo = () => {

    const [campeao, setCampeao] = useState({});

    const { id } = useParams();
    
    useEffect(() => {

        buscarMaisInfoCampeao(id)
            .then((campeao) => setCampeao(campeao))
            .catch((erro) => console.log(erro))

    }, [id])

    return (
        <Container>
            <Wrapper>
                <h1>Mais informações do Campeão</h1>

                <div style={{ width: '500px', margin: '0 auto', padding: '30px' }}>
                    <h1>{campeao.name}</h1>
                    <h3>{campeao.title}</h3>
                    <p>{campeao.lore}</p>
                </div>
            </Wrapper>
        </Container>
    );
}

export default CampeaoInfo;