import React, { useState } from 'react'
import InventarioForm from '../ui/InventarioForm'
import InventarioTable from '../ui/InventarioTable'

const InventarioScreen = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className="container-md ">
            <h1 className="text-center mt-3">Productos Listados en Inventario.</h1>
            <h1 className="text-center"><InventarioForm /></h1>
            <hr />

            <InventarioTable />

        </div>
    )
}


export default InventarioScreen
