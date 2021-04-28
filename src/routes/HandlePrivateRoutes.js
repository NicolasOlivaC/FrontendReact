import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from '../components/ui/Navbar'
import HomeScreen from '../components/screen/HomeScreen'
import InventarioScreen from '../components/screen/InventarioScreen'
import RecetasScreen from '../components/screen/RecetasScreen'

const HandleRoutes = props => {
    console.log("Entre a HandleRoutes Private")
    return (
        <div>
            <Navbar/>
            <Switch >
                <Route exact path="/index/home" component={HomeScreen} />
                <Route exact path="/index/inventario" component={InventarioScreen} />
                <Route exact path="/index/recetas" component={RecetasScreen} />
                <Redirect to ="/index/home" />
            </Switch>
        </div>

    )
}

export default HandleRoutes
