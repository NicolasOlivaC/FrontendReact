import React from 'react'
import RecetasFormCantidadItem from './RecetasFormCantidadItem'
import {useSelector, useDispatch} from 'react-redux'
import useForm from '../../hooks/useForm'
import {agregarItemDB} from '../../actions/Items'
import {useHistory} from 'react-router-dom'


const RecetasCantidad = ({handleLeft}) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [input, handleInput] = useForm({cantidad:1});
    const state = useSelector(state => state.ItemsReducer)
    const handleSubmit = () =>{
        parseInt()
        const data = state.items.map( item => [ item[0], item[1], parseInt(document.getElementById(item[1]).value) ])
        const obj = {titulo: state.titulo, precio: parseInt(input.cantidad), items: data }
        dispatch(agregarItemDB(obj))
        history.replace('/index/recetas')
    }
   
    return (
        <div className="animate__animated animate__fadeInLeft ">
            <h3>Ingresa la cantidad de ingredientes que utilizaras (3/3).</h3>
            <div className="col-sm-5 mx-auto">
                <form className="form mt-2">
                    {state.items.map(item => <RecetasFormCantidadItem key={item[0]} id={item[0]} nombre={item[1]}/>)}
                </form>
            </div>
            <h3 className="mt-4">¿Precio de venta de tu receta?</h3>
            <div className="col-sm-3 mx-auto">
                <input type="number" className="form-control" min="1"  name="cantidad" value={input.cantidad} onChange={handleInput} placeholder="$$$" />
            </div>

            <div className="text-center  mt-3">
                <button className="btn btn-primary  mx-1" onClick={handleLeft}><i className="fas fa-arrow-left"></i></button>
                { (parseInt(input.cantidad) > 0) && <button className="btn btn-primary mx-1 animate__animated animate__fadeIn" onClick={handleSubmit}><i className="fas fa-check-circle"></i></button> }
            </div>
        </div>
    )
}

export default RecetasCantidad
