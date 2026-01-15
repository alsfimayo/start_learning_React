import { useState } from "react";
export default function Controlled() {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    return (
        <div>
            <form action="">
                <input type="text" placeholder="enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <h6>Name: {name}</h6>
                <br /><br />
                <input type="password" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <h6>Password: {password}</h6>
                <br /><br />
                <input type="email" placeholder="email"   value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <h6>Email: {email}</h6>
            </form>
                <button onClick={()=>setEmail('')}>Clear</button>
        </div>
    )
}import { useState } from "react";

export default function Controlled() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <h6>Name: {name}</h6>

                <input
                    type="password"
                    placeholder="enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <h6>Password: {password}</h6>

                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <h6>Email: {email}</h6>

                <button type="button" onClick={() => setEmail('')}>
                    Clear Email
                </button>
            </form>
        </div>
    );
}
