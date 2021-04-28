import React, { useState, useEffect, memo } from 'react'

import { obtenerProductosInventario } from '../../actions/inventarioAction'
import { useSelector, useDispatch } from 'react-redux'

import RecetasFormItem from './RecetasFormItem'
import { defaultItem } from '../../actions/Items'


const RecetasFormIngredientes = memo(({ handleLeft, handleRight }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.ProductoReducer)
    const state2 = useSelector(state2 => state2.ItemsReducer.items.length)

    useEffect(() => {
        dispatch(obtenerProductosInventario());
        dispatch(defaultItem());
    }, [])

    return (
        <>
            <div className="animate__animated animate__fadeInLeft">
                <h3>Selecciona los ingredientes (2/3).</h3>
                <div className="container pt-2 border select overflow-auto text-center">
                    {state.map((state) => <RecetasFormItem key={state.id_productos} nombre={state.nombre} id={state.id_productos} />)}
                </div>
            </div>
            <div className="text-center  mt-3">
                <button className="btn btn-primary  mx-1" onClick={handleLeft}><i className="fas fa-arrow-left"></i></button>
                 { (state2 > 0) && <button className="btn btn-primary mx-1 animate__animated animate__fadeIn " onClick={handleRight}><i className="fas fa-arrow-right"></i></button> }
            </div>

        </>

    )
})



export default RecetasFormIngredientes
