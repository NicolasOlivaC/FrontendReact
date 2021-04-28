import React, { useState, memo } from 'react'
import {useDispatch} from 'react-redux'
import {agregarItem, eliminarItem} from '../../actions/Items'
const RecetasFormItem = memo(({ nombre, id }) => {

    const dispatch = useDispatch()
    const [select, setSelect] = useState(false)

    const handleSelect = (event) => {
        event.preventDefault();
        setSelect(!select)
        dispatch(agregarItem(id, event.target.value))
    }

    const handleRemove = (event) => {
        event.preventDefault();
        setSelect(!select)
        dispatch(eliminarItem(id))
    }

    return (
        <>
            { (select) ?
                <button className="btn btn-danger  buttonIngrediente mt-2 mx-1"  onClick={handleRemove}>{nombre}</button>
                :
                <button className="btn btn-dark buttonIngrediente mt-2 mx-1" value={nombre} onClick={handleSelect}>{nombre}</button>
            }
        </>
    )
})


export default RecetasFormItem
