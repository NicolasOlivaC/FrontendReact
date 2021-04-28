import React from 'react'
import useForm from '../../hooks/useForm'
import { useDispatch} from 'react-redux'
import authGoogleLogin from '../../actions/authGoogle'
import {Link} from 'react-router-dom'
import {loginEmailPassword} from '../../actions/authGoogle'


const LoginScreen = () => {

    const [input, handleInput] = useForm({ username: '', password: '' })
    const { username, password } = input;
    const dispatch = useDispatch()

    const HandleGoogleLogin = () => {
        dispatch(authGoogleLogin())
    }

    const handleLogin = (evento) => {
        evento.preventDefault();
        dispatch(loginEmailPassword(input))
    }

    return (
        <>
            <div className="row mt-5 d-flex justify-content-center text-center">
                <div className="col-lg-4 px-5">
                    <form className="form  d-flex flex-column" onSubmit={handleLogin}>
                        <h1>Welcome to LoginScreen</h1>
                        <input className="form-control mt-3" onChange={handleInput} value={username} type="text" name="username" placeholder="Ingresa Usuario" autoComplete="off" required />
                        <input className="form-control mt-3" onChange={handleInput} value={password} type="password" name="password" placeholder="Ingresa Contraseña" autoComplete="off" required />
                        <button className="btn btn-primary mt-3 ">Ingresar</button>
                    </form>
                    <p className="mt-3">O ingresa con...</p>
                    <div className="mt-3 bg-white border">
                            <a className="btn btn btn-google btn-block text-uppercase btn-outline" onClick={HandleGoogleLogin}>
                                <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
                          Google
                     </a>
                        </div>
                    <hr/>
                    <p>No tienes una cuenta? <Link to="/signup">creala ahora</Link></p>
                </div>
                

            </div>
        </>

    )
}



export default LoginScreen



