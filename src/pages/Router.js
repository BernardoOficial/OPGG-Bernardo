import { Route, Switch } from 'react-router-dom'

import Campeoes from './Campeoes'
import Home from './Home'

const Router = () => {

    return (
        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/campeoes" >
                <Campeoes />
            </Route>
        </Switch>
    )
}

export default Router