import React,{useState, useEffect} from 'react'
import {obtenerProductosReceta} from '../../helpers/consultasRecetas'

const HomeScreenCardList = ({id}) => {
    const [ingredientes, setIngredientes] = useState([])
    useEffect(() => {
        obtenerProductosReceta(id).then(data =>{
            setIngredientes(data)
        })
    }, [])
    return (
        <ul>
            {ingredientes.map( ingr => <li key={ingr.id_producto}> {`${ingr.nombre} x${ingr.cantidadNecesaria}`}</li>)}    
        </ul>
    )
}



export default HomeScreenCardList
