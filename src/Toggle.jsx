import { useState } from "react";
import User from "./User";
export default function Toggle(){

    const [show , setShow] = useState(false)

    return (

        <div>
            <button onClick={()=>setShow(!show)}>toggle</button>
            {
                show ? <User /> : null
            }
            
        </div>
    )
}