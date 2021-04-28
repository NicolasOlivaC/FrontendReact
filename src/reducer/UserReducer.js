
const UserReducer = (state={logged: false, name: null, photo: null}, action) => {
    switch (action.type) {
        case 'login':
            return {logged: action.payload.logged, name: action.payload.name, photo: action.payload.photo}
        case 'signup':
            return {logged: action.payload}
        case 'logout':
            return {logged: false}   
        default:
            return state
    }
}



export default UserReducer
