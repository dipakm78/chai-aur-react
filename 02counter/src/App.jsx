import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [value, setCounter]=useState(1)

  //let value=12
  const AddNumber=() =>{
    console.log("Value Added", value);
    //value=value+1
    //setCounter(value +1)
    if(value>=20){
      alert("Can not increase Number greater than 20")
      setCounter(value)
    }else{
      setCounter(value +1)
    }
  }

  const SubstractNumber=() =>{
    //console.log("Value Added", value);
    //value=value+1
    //setCounter(value -1)
    if(value<=0){
      alert("Can not decrease Number less than 0")
      setCounter(value)
    }else{
      setCounter(value -1)
    }

  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter : {value} </h2>
      <button onClick={AddNumber}>Increase Value</button>
      <button onClick={SubstractNumber}>Decreasd Value</button>     
    </>
  )
}

export default App
