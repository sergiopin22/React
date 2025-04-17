import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Death note', 'One Piece']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        // categories.push( newCategory );
        // setCategories([ newCategory, ...categories])
        setCategories( cat => [...cat, newCategory] )
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory
            //  setCategories={ setCategories } 
                onNewCategory={ event => onAddCategory(event) }
             />


            {/* Listado de Gif */}
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
