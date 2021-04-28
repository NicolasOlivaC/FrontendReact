import React from 'react'


const RecetasFormCantidadItem = ({id, nombre}) => {


    return (
        <div>
            <div className="input-group mb-2">
                <div className="input-group-prepend col-10">
                    <span className="input-group-text">{nombre}</span>
                </div>
                <input type="number" id={nombre} min="1" defaultValue="1" className="form-control" />
            </div>
        </div>
    )
}



export default RecetasFormCantidadItem
