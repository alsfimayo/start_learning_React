import { useState } from "react"
export default function Input(){
const [value,setValue]=useState('Ali ahmad');
    return (
        <div>
            <h1>Input Field</h1>
            <input type="text" value={value} onChange={(event)=>setValue(event.target.value)}  placeholder="Enter Something Here"/>
            <p>current Val: {value}</p>
        </div>
    )
}