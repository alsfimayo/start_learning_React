//we can pass data from one component to another using props in this way
// export default function Props(props ) {
//     return (
//         <div>
//             <h1>Props Components</h1>
//             <h2>Your name is {props.name}</h2>
//             <h2>Your age is {props.age}</h2>
//         </div>
//     )
// }


// //we have another way to destructure props directly in the parameter itself
// export default function Props({name, age} ) {
//     return (
//         <div>
//             <h1>Props Components</h1>
//             <h2>Your name is {name}</h2>
//             <h2>Your age is {age}</h2>      
//         </div>
//     )
// }

export default function Props({intro} ) {
    return (
        <div>
            <h1>Props Components</h1>
            <h2>Your name is {intro.name}</h2>
            <h2>Your age is {intro.age}</h2> 
            <h2>your email is {intro.email}</h2>     
        </div>
    )
}//we have another way to destructure props directly in the parameter itself