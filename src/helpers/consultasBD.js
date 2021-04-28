
const obtainProducts = async () => {
    const data = await fetch('https://inventario-nico.herokuapp.com/obtenerProductos')
    return data.json();
}

const addProduct = async (product) => {
    const data = await fetch('https://inventario-nico.herokuapp.com/insertProducto', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product.payload)
    })
    const resp = await data.json()
    return resp;
}

const deleteProduct = async (id) => {
    const data = await fetch(`https://inventario-nico.herokuapp.com/deleteProducto/${id}`, {
        method: 'delete',
        headers: {
            'content-type': 'application/json'
        }
    })
    const resp = await data.json();
    return resp;
}

const updateProduct = async (id, product) => {
    const data = await fetch(`https://inventario-nico.herokuapp.com/updateProducto/${id}`, {
        method: 'put',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    const resp = await data.json();
    return resp;
}




export { obtainProducts, addProduct, deleteProduct, updateProduct }
