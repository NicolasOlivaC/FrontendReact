
const agregarReceta = async (product) =>{
    const data = await fetch('https://inventario-nico.herokuapp.com/insertReceta',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
   
    const resp = await data.json();
    alert(resp.message)
    return resp;
}

const obtenerReceta = async () => {
    const data = await fetch('https://inventario-nico.herokuapp.com/obtenerRecetas');
    return data.json();
}

const obtenerProductosReceta = async (id) =>{
    const data = await fetch(`https://inventario-nico.herokuapp.com/obtenerRecetas/${id}`)
    return data.json();
}

const eliminarReceta = async (id) =>{
    const data = await fetch(`https://inventario-nico.herokuapp.com/eliminarRecetas/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return data.json();
}

export {agregarReceta, obtenerReceta, obtenerProductosReceta, eliminarReceta}