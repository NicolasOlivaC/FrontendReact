import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InventarioTableItem from './InventarioTableItem'
import { obtenerProductosInventario } from '../../actions/inventarioAction'

const InventarioTable = () => {
    const data = useSelector(state => state.ProductoReducer);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerProductosInventario());
    }, [])
    return (
        <>

            <table className="resp table table-bordered table-light table-hover">
                <thead>
                    <tr className="text-center ">
                        <th className="py-1">Nombre</th>
                        <th className="py-1"> Fecha compra </th>
                        <th className="py-1">Cantidad</th>
                        <th className="py-1">Precio</th>
                        <th className="py-1">Precio Unitario</th>
                        <th className="py-1">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(elem => <InventarioTableItem key={elem.id_productos} id={elem.id_productos} nombre={elem.nombre} cantidad={elem.cantidad} precio={elem.precio} fecha={elem.fecha} />)}
                </tbody>
            </table>

        </>
    )
}



export default InventarioTable
