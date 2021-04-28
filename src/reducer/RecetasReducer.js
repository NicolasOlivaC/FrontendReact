
const RecetasReducer = (state = [], action) =>{
    switch (action.type) {
        case 'loadRecetas':
            return action.payload
        default:
            return state
    }
}

export default RecetasReducer;