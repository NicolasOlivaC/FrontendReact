import React, { memo } from 'react'
import { useSelector } from 'react-redux'


const RecetasFormCard = memo(() => {
    const state2 = useSelector(state => state.ItemsReducer)
    return (
        <>
            <div className="mt-5 animate__animated animate__fadeInLeft">
                <h3>Confirma la información de tu receta (3/3).</h3>
                <div className="col-md-5  mx-auto " >
                    <div className="card">
                        <div className="card-body ">
                            <h4 className="card-title text-center">{state2.titulo}</h4>
                            <img className="w-100" src="/pollo.jpg" />
                            <hr />
                            <h5>Ingredientes</h5>
                            <ol>
                                {state2.items.map(item => <li key={item[0]}>{item[1]}</li>)}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})



export default RecetasFormCard
