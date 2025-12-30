
import { useState } from "react"
export default function  Counter(){
    const [count,setCount] = useState(0)
    
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>setCount(count+1)}>click</button>
            {
                count==0 ? <h2>Condition 0</h2>
                :count == 1 ? <h2>Condition 1</h2>
                :count == 2 ? <h2>Condition 2</h2>
                :<h2>no condition form</h2>
            }
           
        </div>
    )
}