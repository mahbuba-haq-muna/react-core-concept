import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(10)

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleRemove = () =>{
        setCount(count - 1);
    }

    const counterStyle = {
        border: '2px solid red',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
    }

    return (
        <div style={counterStyle}>
        <h3>counter {count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        </div>
    )
}