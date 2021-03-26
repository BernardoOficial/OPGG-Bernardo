const buscarCampeoes = async () => {

    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/11.5.1/data/pt_BR/champion.json"
    );

    const { data: campeoes } = await response.json();

    if(!response.ok) {
        throw new Error('Erro ao buscar os campeões');
    }

    return campeoes;
}

const buscarMaisInfoCampeao = async campeao => {

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/11.6.1/data/pt_BR/champion/${campeao}.json`
    );

    const { data } = await response.json();

    if(!response.ok) {
        throw new Error('Erro ao buscar mais informações do campeão.');
    }

    return data[campeao];
}

export {
    buscarCampeoes,
    buscarMaisInfoCampeao
}