
import Counter from "./Counter";
import Props from "./Props";
import Toggle from "./Toggle";


export default function App() {
  // let name="john"
  // let age=23
  //we can also pass the value using object destructuring
  const person = { name: "ali ahmad", age: 23 , email: "usamamayo.dev@gmail.com"};
  return (

    <div>
      <h1>Hello everyone</h1>
      <Props  intro= {person}/>
      
    {/* // one method to  pass the value <Props name={name} age={age} /> */}
      <Counter />
      <Toggle />
   {/* // one method to  pass the value <Props name={name} age={age} /> */}
   {/* //one method to pass the value   <Props name="john"   age={23} />; */}
    </div>
  )
}
