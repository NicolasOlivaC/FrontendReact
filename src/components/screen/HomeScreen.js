import React, { useEffect } from 'react'
import { obtainRecetas } from '../../actions/recetas'
import { useDispatch, useSelector } from 'react-redux'
import HomeScreenCard from '../ui/HomeScreenCard'
const HomeScreen = props => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.RecetasReducer)
    useEffect(() => {
        dispatch(obtainRecetas());
    }, [])
    return (
        <div className="container">
            <h1 className="mt-3">Recetas agregadas.</h1>
            <hr/>
            <div className="row">
                {state.map(receta => <HomeScreenCard key={receta.id_recetas} id={receta.id_recetas} titulo={receta.titulo} precioVenta={receta.precioVenta} />)}
            </div>
        </div>
    )
}

export default HomeScreen
