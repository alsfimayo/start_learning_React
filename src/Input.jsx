import { useState } from "react"
export default function Input(){
const [value,setValue]=useState('');
    return (
        <div>
            <h1>Input Field</h1>
            <input type="text" value={value} onChange={(event)=>setValue(event.target.value)}  placeholder="Enter Something Here"/>
            <h1> {value}</h1>
            <button onClick={()=>setValue('')}>clear value</button>
        </div>
    )
}