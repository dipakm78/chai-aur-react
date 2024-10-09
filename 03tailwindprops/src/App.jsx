import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)
  return(
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Text</h1>
      <Card userName="Chai-Aur-React" btnText="Click Me" source="https://images.pexels.com/photos/28525048/pexels-photo-28525048/free-photo-of-elegant-portrait-of-woman-in-fashionable-gown.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      <Card userName="Dipak"  source="https://images.pexels.com/photos/27750569/pexels-photo-27750569/free-photo-of-model-in-black-tube-top-and-leggings-holding-her-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
   
    </>
  )
  // let myObj={
  //   userName:"Dipak",
  //   Age:46
  // }

  // let newArr=[1,2,3,4]

  
}

export default App
