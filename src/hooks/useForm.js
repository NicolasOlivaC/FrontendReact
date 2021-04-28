import {useState} from 'react'

const useForm = (initialState) => {
    const [input, setInput] = useState(initialState);

    const handleInput = (evento) =>{
        setInput({...input, [evento.target.name] :  evento.target.value})
    }

    const reset = ()=>{
        setInput(initialState);
    }

    return [input, handleInput, reset];

}


export default useForm
