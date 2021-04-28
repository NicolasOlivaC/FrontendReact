import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'

const authGoogleLogin = () => {
    return async (dispatch) => {
        
        try{
            const data = await firebase.auth().signInWithPopup(googleAuthProvider);
            dispatch(loginGoogle({logged: true, name: data.user.displayName.toUpperCase(), photo: data.user.photoURL}));
        }
        catch(error){
            console.log(error)
        }
    }
}

const loginGoogle = (estado) => {
    return {
        type: 'login',
        payload: estado
    }
}


const startLogOut = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logOut())
    }
}

const logOut = () => {
    return {
        type: 'logout'
    }
}


// SECCION DE AUTENTICACIÓN CON EMAIL Y PASSWORD

const signupEmailPassword = (obj)=>{
    return async (dispatch) =>{
        try{
            await firebase.auth().createUserWithEmailAndPassword(obj.username, obj.password);
            dispatch(finallySignup(true))
        }
        catch(error){
            console.log(error)
        }   
    }
}

const finallySignup = (mensaje) =>{
    return {
        type:'signup',
        payload: mensaje
    }
}

const loginEmailPassword = (obj)=>{
    return async (dispatch) =>{
        try{
            const data = await firebase.auth().signInWithEmailAndPassword(obj.username, obj.password);
            dispatch(finallyLogin({logged: true, name: data.user.email.toUpperCase()}))
        }
        catch(error){
            console.log(error)
        }
    }
}

const finallyLogin = (mensaje) =>{
    return{
        type:'login',
        payload: mensaje
    }
}



export { authGoogleLogin as default, loginGoogle, startLogOut, signupEmailPassword, loginEmailPassword}