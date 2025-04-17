import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Death note', 'One Piece']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // categories.push( newCategory );
        // setCategories([ newCategory, ...categories])
        setCategories(cat => [...cat, newCategory])
    }

    return (
        <>

            <h1>GifExpertApp</h1>

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
