import React from 'react'
import useForm from '../../hooks/useForm'
import { agregarTitulo } from '../../actions/Items'
import { useDispatch } from 'react-redux'

const RecetasFormTitulo = ({ handleRight }) => {

    const dispatch = useDispatch();
    const [input, handleInput] = useForm({ titulo: '' });
    const handleTitulo = () => {
        dispatch(agregarTitulo(input.titulo))
        handleRight();
    }

    return (
        <>
            <div className="animate__animated animate__fadeInLeft ">
                <h3>Ingresa el nombre de tu Receta (1/3).</h3>
                <input className="form-control " placeholder="Nombre de la Receta" name="titulo" value={input.titulo} onChange={handleInput} />
            </div>

            <div className="text-center mt-3">
                {
                    (input.titulo.length > 0) && <button className="btn btn-primary animate__animated animate__fadeIn" onClick={handleTitulo}><i className="fas fa-arrow-right"></i></button>
                }
            </div>
        </>
    )
}


export default RecetasFormTitulo
