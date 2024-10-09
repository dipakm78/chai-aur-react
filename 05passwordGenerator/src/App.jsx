import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [Length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed]=useState(false)
  const [charAllowed, setcharAllowed]=useState(false)
  const [password, setPassword]=useState("")

  //useRef Hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
    
  },[password])

  const passwordGenerator=useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*+-"
    for (let i = 1; i <= Length; i++) {
      let char=Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass) 
         
    
  },[Length, numberAllowed, charAllowed, setPassword])
  useEffect(() => {
    passwordGenerator()
  },[Length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8
      text-orange-500 bg-gray-700'>
        <h1 className=' text-white text-center text-2xl'>Password Generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input 
          type="text"
          id="passwordField"
          value={password}
          className='outline-none w-80 py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          htmlFor="passwordField" 
          className=' outline-none bg-blue-700
           text-white px-3 py-0.5 shrink-0'
           onClick={copyPasswordToClipboard}
           >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className=' flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            id="rangeBar"
            value={Length} 
            className=' cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}            
            
             />
            <label htmlFor='rangeBar' >Label:{Length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultValue={numberAllowed}
            id="numberInput" 
            onChange={()=>{
              setnumberAllowed((prev)=> !prev);
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultValue={charAllowed}
            id="charInput" 
            onChange={()=>{
              setcharAllowed((prev)=> !prev);
            }}/>
            <label htmlFor="charInput">Charecter</label>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
