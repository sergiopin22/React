import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Death note']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // categories.push( newCategory );
        setCategories([ newCategory, ...categories])
        //setCategories(cat => [...cat, newCategory])
    }

    return (
        <>

            <h1>GifExpertApp Web</h1>
            <p>Pagina web que extrae Gifs de Giphy</p>

            <AddCategory

                onNewCategory={event => onAddCategory(event)}
            />


            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category} />
                ))
            }


        </>
    )
}
