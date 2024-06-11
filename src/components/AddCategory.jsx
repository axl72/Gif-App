import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [ inputValue, setInputValue] = useState()
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Busca un gift" value={inputValue} onChange={(event) => onInputChange(event)}/>

        </form>
    )
}