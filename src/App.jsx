import { Login } from "./Login";

const user = {
  name:'John Doe',
  age:30,
  location:'New York',
  imageUrl:'https://via.placeholder.com/150',
  imageSize:150
};

export default function App() {
  const myName= 'Ali Ahmad'
  return (
    <div>
      <img src={user.imageUrl} alt={user.name} style={{ width: user.imageSize, height: user.imageSize }} />
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location} myName: {myName}</p> 
      <button onClick={()=>alert('hello')}>click me</button>
      <Sum /> 
      <Login />
    </div>
  )
}

function Sum(){
  return 10+10;
}