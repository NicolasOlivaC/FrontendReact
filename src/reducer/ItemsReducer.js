

const ItemsReducer = (state={titulo:'', precio: '', items:[]}, action) =>{

    switch (action.type) {
        case 'agregar':
            const {id, nombre} = action.payload
            return {titulo:state.titulo,  precio: '', items: [...state.items, [id, nombre]]}
        case 'eliminar':
            const data = state.items.filter( item => item[0] !== action.payload);
            return {titulo:state.titulo, precio: '', items:data}
        case 'titulo':
            return {titulo:action.payload, precio: '', items: state.items}
        case 'default':
            return {titulo: state.titulo, precio: '', items: []}
        default:
            return state
    }
}


export  default ItemsReducer