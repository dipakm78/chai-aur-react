import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return (
//         <div>
//             <h1>Hello, Mr. Dipak!</h1>
//         </div>
//     )
// }

// // const reactElement={
// //     type:'a',
// //     props:{
// //         href:'https://google.co.in',
// //         target:'_blank'
// //     },
// //     children: 'Click Me to visit Google'
// // }

// const anotherElement=(
//     <a href='https://google.com' target='_blank'>Visit Google</a>
// )
// const reactElement=React.createElement(
//     'a',
//     {href:'https://google.co.in',target:'_blank'},
//     'Click Me to visit Google'
// )
createRoot(document.getElementById('root')).render(
  
    
    <App />
  
)
