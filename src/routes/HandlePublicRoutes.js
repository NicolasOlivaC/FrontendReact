import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import LoginScreen from '../components/screen/LoginScreen'
import SignupScreen from '../components/screen/SignupScreen'
const HandleRoutes = props => {
    console.log("Entre a HandleRoutes Public")
    return (
        <div>
            <Switch >
                <Route  exact path="/signup" component={SignupScreen} />
                <Route  exact path="/" component={LoginScreen} />
                <Redirect to="/" />
            </Switch>
        </div>

    )
}

export default HandleRoutes
