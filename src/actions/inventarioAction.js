import { obtainProducts, addProduct, deleteProduct, updateProduct } from '../helpers/consultasBD'



const obtenerProductosInventario = () => {
    return async (dispatch) => {
        const data = await obtainProducts()
        dispatch(setData(data))
    }
}

const agregarProductoInventario = (obj) => {
    return async (dispatch) => {
        const resp = await addProduct(obj);
        console.log("respuesta: ", resp)
        dispatch(obtenerProductosInventario())
    }
}

const eliminarProductoInventario = (id) => {
    console.log("entre a eliminar")
    return async (dispatch) => {
        const resp = await deleteProduct(id);
        console.log("respuesta: ", resp)
        dispatch(obtenerProductosInventario());
    }
}

const updateProductoInventario = (id, obj) => {
    return async (dispatch) => {
        const resp = await updateProduct(id, obj)
        console.log("respuesta: ", resp)
        dispatch(obtenerProductosInventario())
    }
}


const setData = (data) => {
    return ({
        type: 'load',
        payload: data
    })
}

export { obtenerProductosInventario, agregarProductoInventario, eliminarProductoInventario, updateProductoInventario }