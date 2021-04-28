import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startLogOut } from '../../actions/authGoogle'
const Navbar = () => {
    const state = useSelector(state =>state.UserReducer)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(startLogOut())
    }


    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark px-2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                { state.photo ?  <img className="photo" src ={ state.photo} /> : <img className="photo" src='/defaultImage.jpg' /> }
                
                <a className="navbar-brand mx-auto tam">{state.name}</a>

                <div className="collapse navbar-collapse px-2" id="navbarTogglerDemo02">
                    <div className="navbar-nav  overlay-content-primary">
                        <NavLink exact to="/index/home" className="nav-item nav-link" >Inicio</NavLink>
                        <NavLink exact to="/index/Inventario" className="nav-item nav-link" >Inventario</NavLink>
                        <NavLink exact to="/index/recetas" className="nav-item nav-link" >Recetas</NavLink>
                        <button className="btn btn-dark text-left px-0" onClick={handleClick} >logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar
