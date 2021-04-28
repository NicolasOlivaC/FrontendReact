import React from 'react'
import useForm from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { agregarProductoInventario } from '../../actions/inventarioAction'


const InventarioForm = () => {
    const dispatch = useDispatch();
    const [{ nombre, cantidad, precio }, handleInput, reset] = useForm({ nombre: '', cantidad: '', precio: '' });
    const handleSubmit = (evento) => { 
        evento.preventDefault();
        dispatch(agregarProductoInventario({
            type: 'agregar',
            payload: { nombre: nombre, cantidad: parseInt(cantidad), precio: parseInt(precio) }
        }))
        reset();
    }

    return (
        <>

            <button type="button" className="btn btn-dark mx-3" data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-plus-circle"></i></button>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content px-3 py-3">
                        <h1 className="text-center">Nuevo Producto.</h1>
                        <form className="form d-flex flex-column " onSubmit={handleSubmit}>
                            <input className="form-control mt-2" type="text" name="nombre" value={nombre} onChange={handleInput} placeholder="Nombre de Producto" required  />
                            <input className="form-control mt-2" type="number" name="cantidad" value={cantidad} onChange={handleInput} placeholder="Cantidad" required />
                            <input className="form-control mt-2" type="number" name="precio" value={precio} onChange={handleInput} placeholder="Precio $$$" required />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Ingresar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}


export default InventarioForm
