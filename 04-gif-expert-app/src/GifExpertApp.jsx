import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Death note', 'One Piece']);

    const onAddCategory = () => {
        //Black Clover
        // categories.push('Black Clover');
        setCategories(['Black Clover', ...categories])
        // setCategories( cat => [...cat, 'Black Clover'] )
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
                {/* <li></li> */}
            </ol>
            {/* Gif Item */}

        </>
    )
}
