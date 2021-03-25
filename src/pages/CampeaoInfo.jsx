import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
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

    console.log(campeao);

    return (
      <Container background={"#121212"} minHeight={"100vh"}>
        <Banner
          srcImage={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeao.id}_0.jpg`}
        />
        <Wrapper>
          <Jumbotron
            name={campeao.name}
            title={campeao.title}
            lore={campeao.lore}
          />
        </Wrapper>
      </Container>
    );
}

export default CampeaoInfo;