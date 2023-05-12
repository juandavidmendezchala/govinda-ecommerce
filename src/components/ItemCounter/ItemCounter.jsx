import { useState } from "react"

export default function ItemCounter(){

    const [count, setCount] = useState(0)

    const quantity = 2

    const decreaseCounter = () => {
        if(count < 2) {
            return alert("Not avaiable")
        }
        setCount(count-1)
    }

    const plusCounter = (quantity) => {
        if(count > quantity) {
            return alert("Not avaiable")
        }
        setCount(count+1)
    }

    return(
        <>
            <h2>Cantidad: {count}</h2>
            <button onClick={() => plusCounter(quantity)}>+</button>
            <button onClick={decreaseCounter}>-</button>
        </>
    )
}