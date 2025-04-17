import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Boku no hero');

    const onInputChange = ({ target }) => {
        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputTrim = inputValue.trim();
        if( inputTrim.length <=1) return;
        
        // setCategories( categories => [inputValue, ...categories] )
        onNewCategory( inputTrim );
        setInputValue('');
    }

    return (
        <form onSubmit={ (value) => onSubmit(event) }>
            <input
                type="text"
                placeholder='Buscar Gifs'
                value={ inputValue }
                onChange={onInputChange}
            />
        </form>
    )
}
