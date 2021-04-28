import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({Component, isAutenticated, ...rest}) => {
   console.log("Entre a PrivateRoute")
    return (
        <Switch >
            <Route {...rest} component={  props => (isAutenticated) ? <Redirect to="/index" /> : <Component { ...props}/>  }/>
        </Switch>
    )
}



export default PrivateRoute
