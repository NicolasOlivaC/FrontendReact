import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({Component, isAutenticated, ...rest}) => {
    console.log("Entre a PrivateRoute")
    return (
        <Switch >
            <Route {...rest} component={  props => (isAutenticated) ? <Component { ...props}/> :<Redirect to="/" /> }/>
        </Switch>
    )
}

export default PrivateRoute
