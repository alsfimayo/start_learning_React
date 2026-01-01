
import Counter from "./Counter";
import Props from "./Props";
import Toggle from "./Toggle";
import College from "./College";
import { useState } from "react";
import Student from "./Student";


export default function App() {
  // let name="john"
  // let age=23
  //we can also pass the value using object destructuring
  const college = ["harvard", "mit", "stanford", "oxford"];
  const [student,setStudent]=useState('');
  const person = { name: "ali ahmad", age: 23 , email: "usamamayo.dev@gmail.com"};
  const person1 = {name : "usama", age: 25 , email: "usama@example.com"};
  return (

    <div>
      {student && <Student name={student} /> }
      <button onClick={()=>setStudent('usama')}>click me for student</button>
      
      <hr />
      <Props  intro= {person}/>
      <hr />
      <Props intro={ person1} />
      <hr />
      
    {/* // one method to  pass the value <Props name={name} age={age} /> */}
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <College name={college[3]} />
      <hr />

   {/* //one method to pass the value   <Props name="john"   age={23} />; */}
    </div>
  )
}
