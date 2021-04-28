
import {agregarReceta} from '../helpers/consultasRecetas'
import {obtenerProductosInventario} from '../actions/inventarioAction'

const agregarItem = (id, nombre) => {
    return {
        type: 'agregar',
        payload: {
            id: id,
            nombre: nombre
        }
    }
}

const eliminarItem = (id) => {
    return {
        type: 'eliminar',
        payload: id
    }
}


const agregarTitulo = (titulo) => {
    return {
        type: 'titulo',
        payload: titulo
    }
}

const defaultItem = () => {
    return {
        type: 'default'
    }
}


const obtenerItemDB = () => {
    return async (dispatch) => {
        const data = obtenerProductosInventario;
        console.log(data)
    }
}

const agregarItemDB = (obj) => {
    return async (dispatch) => {
        const resp = await agregarReceta(obj);
    }
}

export { agregarItem, eliminarItem, defaultItem, agregarTitulo, agregarItemDB, obtenerItemDB}