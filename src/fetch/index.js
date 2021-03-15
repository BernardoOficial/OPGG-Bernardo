const buscarCampeoes = async () => {

    const response = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.5.1/data/pt_BR/champion.json"
    );

    const { data: campeoes } = await response.json();

    if(!response.ok) {
        throw new Error('Erro ao buscar os campeões');
    }

    return campeoes;
}

export {
    buscarCampeoes
}