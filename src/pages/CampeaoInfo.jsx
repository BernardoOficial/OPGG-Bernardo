import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { buscarMaisInfoCampeao } from "../fetch";

import Banner from "../components/Banner";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import Spells from "../components/Spells";

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
          <Spells
            passive={campeao.passive && campeao.passive}
            fourSpells={campeao.spells && campeao.spells}
          />
        </Wrapper>
      </Container>
    );
}

export default CampeaoInfo;