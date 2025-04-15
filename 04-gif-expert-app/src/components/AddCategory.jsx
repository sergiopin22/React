import { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Boku no hero');

    const onInputChange = ({ target }) => {
        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log( inputValue );
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder='Buscar Gifs'
                value={ inputValue }
                onChange={onInputChange}
            />
        </form>
    )
}
