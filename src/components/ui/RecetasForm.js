import React, { useState} from 'react'
import RecetasFormTitulo from './RecetasFormTitulo'
import RecetasFormIngredientes from './RecetasFormIngredientes'
import RecetasFormCard from './RecetasFormCard'
import RecetasFormCantidad from './RecetasFormCantidad'
const RecetasForm = () => {
    
    const [contador, setContador] = useState(1);
    const handleRight = () => {
        (contador < 4) && setContador(contador + 1)
    }
    const handleLeft = () => {
        (contador >= 2) && setContador(contador - 1)
    }
    const mostrar = () => {
        switch (contador) {
            case 1:
                return <RecetasFormTitulo handleRight={handleRight}/>
            case 2:
                return <RecetasFormIngredientes handleLeft={handleLeft} handleRight={handleRight} />
            case 3:
                return <RecetasFormCantidad handleLeft={handleLeft} handleRight={handleRight}/>
            case 4:
                return <RecetasFormCard handleLeft={handleLeft} handleRight={handleRight} />
            default:
                return <RecetasFormTitulo handleLeft={handleLeft}/>
        }
    }

    return (
        <>
            { mostrar() }
        </>
    )
}


export default RecetasForm