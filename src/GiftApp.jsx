import { useState } from 'react'
import { AddCategory, GiftGrid } from './components';




export const GiftApp = () => {
    const [ categories, setCategories] = useState([]);

    const onNewCategory = (category) => {
        if(categories.includes(category)){
            return;
        }
        setCategories([category, ...categories])
    }

    return (
        <>
            <h1>GiftApp</h1>
            <AddCategory onNewCategory={onNewCategory}/>
                { categories.map(category => <GiftGrid key={category} category={category}/>) }

            {/* <button onClick={onNewCategory}>Agrega una nueva categoría</button> */}
        </>
    )
}