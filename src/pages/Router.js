import { Route, Switch } from 'react-router-dom'
import CampeoesProvider from '../Context/CampeoesContext'

import Campeoes from './Campeoes'
import Home from './Home'

const Router = () => {

    return (
        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/campeoes" >
                <CampeoesProvider>
                    <Campeoes />
                </CampeoesProvider>
            </Route>
        </Switch>
    )
}

export default Router