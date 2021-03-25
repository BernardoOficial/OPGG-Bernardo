import { Route, Switch } from 'react-router-dom'
import CampeoesProvider from '../Context/CampeoesContext'
import CampeaoInfo from './CampeaoInfo'

import Campeoes from './Campeoes'
import Home from './Home'

const Router = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/campeoes">
                <CampeoesProvider>
                    <Campeoes />
                </CampeoesProvider>
            </Route>
            <Route path="/campeoes/:id">
                <CampeaoInfo />
            </Route>
            <Route path="*">
                <h1>Error 404</h1>
            </Route>
        </Switch>
    )
}

export default Router