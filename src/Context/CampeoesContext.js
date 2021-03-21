import { createContext, useState, useEffect } from 'react'

import { buscarCampeoes } from '../fetch/index'

const CampeoesContext = createContext({});

const CampeoesProvider = ({children}) => {

    const [campeoes, setCampeoes] = useState({});
    const nameCampeoes = Object.keys(campeoes);

    useEffect(() => {
      buscarCampeoes()
        .then((campeoes) => setCampeoes(campeoes))
        .catch((error) => console.log(error));
    }, []);

    return (
        <CampeoesContext.Provider value={{
            campeoes,
            nameCampeoes
        }}>
            {children}
        </CampeoesContext.Provider>
    )
}

export {
    CampeoesProvider as default,
    CampeoesContext
}