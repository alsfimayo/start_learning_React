
import Counter from "./Counter";
import Props from "./Props";
import Toggle from "./Toggle";
import College from "./College";
import { useState } from "react";
import Student from "./Student";
import DefaultProps from "./DefaultProps";
import WrapperCss from "./WrapperCss";
import Input from "./Input";
import ArrayProducts from "./ArrayProducts";


export default function App() {
  // let name="john"
  // let age=23
  //we can also pass the value using object destructuring
  // const college = ["harvard", "mit", "stanford", "oxford"];
  // const [student,setStudent]=useState('');
  // const person = { name: "ali ahmad", age: 23 , email: "usamamayo.dev@gmail.com"};
  // const person1 = {name : "usama", age: 25 , email: "usama@example.com"};
  
  return (
    <div>
      {/* <h2>Default Props Example</h2>
      <DefaultProps title="Ali ahmad" />
      <DefaultProps /> */}
      {/* <WrapperCss color='yellow' >
        <h1>Wrapper CSS</h1>
        <h2 style={{color:'red'}}>Login in </h2>
      </WrapperCss>
      <WrapperCss>
        <form>Login Form</form>
      </WrapperCss> */}
      <ArrayProducts />
      <Input />
    </div>
  //     <Props  intro= {person}/>
  //     <hr />
  //     <Props intro={ person1} />
  //     <hr />
      
  //   {/* // one method to  pass the value <Props name={name} age={age} /> */}
  //     <Counter />
  //     <hr />
  //     <Toggle />
  //     <hr />
  //     <College name={college[3]} />
  //     <hr />

  //  //one method to pass the value   <Props name="john"   age={23} />;
  //   </div>
  )
}
