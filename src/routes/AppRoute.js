import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { firebase } from '../firebase/firebaseConfig'

import PrivateRoute from '../routes/PrivateRoute'
import PublicRoute from '../routes/PublicRoute'
import HandlePrivateRoutes from '../routes/HandlePrivateRoutes'
import HandlePublicRoutes from './HandlePublicRoutes'

import { useDispatch, useSelector } from 'react-redux'
import { loginGoogle } from '../actions/authGoogle'


const AppRoute = () => {
    const [check, setCheck] = useState(true)
    const dispatch = useDispatch()
    const state = useSelector(state => state.UserReducer)
    console.log("estoy en AppRoute")
    useEffect(() => {
        firebase.auth().onIdTokenChanged((user) => {
            if (user?.uid) {
                dispatch(loginGoogle({
                    logged: true,
                    name: user.displayName?.toUpperCase() || user.email.toUpperCase(),
                    photo: user.photoURL
                }));
            }
            setCheck(false)
        })
    }, [])

    if (check) {
        return <h1></h1>
    }
    return (
        <Router >
            <Switch >
                <PrivateRoute path='/index' Component={HandlePrivateRoutes} isAutenticated={state.logged} />
                <PublicRoute path='/' Component={HandlePublicRoutes} isAutenticated={state.logged} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default AppRoute
