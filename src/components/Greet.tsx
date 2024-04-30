 import React from "react"
 type Greet = {
    name: string
    age: number
 }
 
 function greet(name: string): string {
    return `Hello, ${name}!`;
}

export const  GreetMessage = (props: Greet) => {
   return (
     <div>
     <h2>Welcome {props.name}<br />Age = {props.age}</h2>
    
     </div>
   )
}
export default GreetMessage;