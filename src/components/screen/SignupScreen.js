import React from 'react'
import useForm from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import {signupEmailPassword} from '../../actions/authGoogle'


const SignupScreen = () => {

    const [input, handleInput] = useForm({ username: '', password: '' })
    const { username, password } = input;
    const dispatch = useDispatch()

    const handleLogin = (evento) => {
        evento.preventDefault();
        dispatch(signupEmailPassword(input));
        console.log(input)
    }


    return (
        <>
            <div className="row mt-5 d-flex justify-content-center text-center">
                <div className="col-lg-4 px-5">
                    <form className="form  d-flex flex-column" onSubmit={handleLogin}>
                        <h1>Welcome to SignupScreen</h1>
                        <input className="form-control mt-3" onChange={handleInput} value={username} type="text" name="username" placeholder="Ingresa Usuario" autoComplete="off" required />
                        <input className="form-control mt-3" onChange={handleInput} value={password} type="password" name="password" placeholder="Ingresa Contraseña" autoComplete="off" required />
                        <button className="btn btn-primary mt-3 ">Registrar</button>
                    </form>
                </div>
                

            </div>
        </>

    )
}



export default SignupScreen



