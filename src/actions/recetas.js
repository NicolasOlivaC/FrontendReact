import {obtenerReceta, eliminarReceta} from '../helpers/consultasRecetas'


const obtainRecetas = () =>{
    return async (dispatch) =>{
        let productos = []
        const recetas = await obtenerReceta();
        dispatch(obtainRecetas2(recetas))
    }
}

const eliminarRecetas = (id) =>{
    return async(dispatch) =>{
        const data = await eliminarReceta(id)
        dispatch(obtainRecetas())
    }
}


const obtainRecetas2 = (recetas) =>{
    return {
        type: 'loadRecetas',
        payload: recetas
    }
}


export {obtainRecetas, eliminarRecetas}