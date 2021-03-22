/* eslint-disable array-callback-return */
import { createContext, useState, useEffect } from 'react'

import { buscarCampeoes } from '../fetch/index'

const CampeoesContext = createContext({});

const CampeoesProvider = ({children}) => {

    const [campeoes, setCampeoes] = useState({});
    const [nomeTodosCampeoes, setNomeTodosCampeoes] = useState([]);
    const [campeoesVisualizados, setCampeoesVisualizados] = useState([]);

    useEffect(() => {
      buscarCampeoes()
        .then((campeoes) => setCampeoes(campeoes))
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        const nomeTodosCampeoes = Object.keys(campeoes);
        setNomeTodosCampeoes(nomeTodosCampeoes);
        setCampeoesVisualizados(nomeTodosCampeoes);
    }, [campeoes])

    // console.log(nomeTodosCampeoes,campeoesVisualizados);

    const filtrarCampeoes = filtroSelecionado => {

        const { campeaoBuscado, categoriaBuscada } = filtroSelecionado;

        const filtrarPeloNome = (nameCampeao) => {
            const nameCampeaoLowerCase = campeoes[nameCampeao].name.toLowerCase();
            const campeaoBuscadoLowerCase = campeaoBuscado.toLowerCase();
            const isMatchCampeao = nameCampeaoLowerCase.includes(campeaoBuscadoLowerCase);
            return isMatchCampeao
        }

        const filtrarPelaCategoria = nameCampeao => {
            const categoriasDoCampeao = campeoes[nameCampeao].tags;
            console.log(categoriasDoCampeao);
            const isMatchCampeao = categoriasDoCampeao.includes(categoriaBuscada);
            return isMatchCampeao
        }

        const filtrarPeloNomeECategoria = nameCampeao => {
            const isMatchCampeao = filtrarPeloNome(nameCampeao) && filtrarPelaCategoria(nameCampeao);
            return isMatchCampeao
        }

        const selecionados = nomeTodosCampeoes.filter(nameCampeao => {

            if (campeaoBuscado && categoriaBuscada) {
                return filtrarPeloNomeECategoria(nameCampeao);
            }
            if(campeaoBuscado) {
                return filtrarPeloNome(nameCampeao);
            }
            else if(categoriaBuscada) {
                return filtrarPelaCategoria(nameCampeao);
            }
            else if (campeaoBuscado.length === 0 || categoriaBuscada.length === 0) {
                return true
            }
        })

        setCampeoesVisualizados(selecionados);
    }

    return (
        <CampeoesContext.Provider value={{
            campeoes,
            campeoesVisualizados,
            filtrarCampeoes
        }}>
            {children}
        </CampeoesContext.Provider>
    )
}

export {
    CampeoesProvider as default,
    CampeoesContext
}