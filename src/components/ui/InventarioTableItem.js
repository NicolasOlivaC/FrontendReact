import React, { useState, memo} from 'react'
import useForm from '../../hooks/useForm'
import { eliminarProductoInventario, updateProductoInventario} from '../../actions/inventarioAction'
import { useDispatch } from 'react-redux'
const InventarioTableItem = memo(({ id, nombre, cantidad, precio, fecha }) => {
    const [input, handleInput] = useForm({nombre1:nombre, cantidad1:cantidad, precio1:precio})
    const {nombre1, cantidad1, precio1} = input;
    const dispatch = useDispatch()
    const [show, setShow] = useState(true)

    const handleDelete = (id) => {
        dispatch(eliminarProductoInventario(id));
    }
    const handleShow = () => {
        setShow(!show)
    }
    const handleUpdate = () => {
        dispatch(updateProductoInventario(id, {
            nombre:nombre1,
            cantidad:cantidad1,
            precio:precio1
        }))
        setShow(!show)
    }

    return (
        <>
            {
                (show) ?
                    <tr className="text-center">
                        <td className="py-1 align-middle">{nombre}</td>
                        <td className="py-1 align-middle">{fecha}</td>
                        <td className="py-1 align-middle">{cantidad}</td>
                        <td className="py-1 align-middle">{`$${precio}`}</td>
                        <td className="py-1 align-middle">{`$${(precio / cantidad).toFixed(2)}`}</td>
                        <td className="py-1 align-middle">
                            <button className="btn btn-danger" onClick={() => handleShow()} ><i className="fas fa-edit"></i></button>
                            <button className="btn btn-primary" onClick={() => { handleDelete(id) }}><i className="far fa-trash-alt"></i></button>
                        </td>
                    </tr> :

                    <tr className="text-center">
                        <td className="py-1 align-middle"><input className="w-100" type="text" name="nombre1" value={nombre1} onChange={handleInput}/></td>
                        <td className="py-1 align-middle">{fecha}</td>
                        <td className="py-1 align-middle"><input className="w-100" type="text" name="cantidad1" value={cantidad1} onChange={handleInput} /></td>
                        <td className="py-1 align-middle"><input className="w-100" type="text" name="precio1" value={precio1} onChange={handleInput}  /></td>
                        <td className="py-1 align-middle">{`$${(precio / cantidad).toFixed(2)}`}</td>
                        <td className="py-1 align-middle">
                            <button className="btn btn-warning " onClick={() => handleUpdate()} >Listo?</button>
                        </td>
                    </tr>
            }


        </>

    )
})


export default InventarioTableItem
