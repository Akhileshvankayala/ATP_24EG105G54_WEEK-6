import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);//state and function to modify teh state,primitive-number,string boolean....but it can also be reference type,array and object
    const increment=()=>{
        setCount(count+1)
    };
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=(value)=>{
        setCount(0);
    }
    return(
        <div className="mx-auto">
        <h1>count:{count}</h1>
        <button className="px-2 py-2 mx-2 bg-cyan-400" onClick={increment}>+</button>
        <button className="px-2 py-2 mx-2 bg-cyan-400" onClick={decrement}>-</button>
        <button className="px-2 py-2 mx-2 bg-cyan-400" onClick={()=>reset(0)}>Reset</button>//arrow function to call parameterized function
        </div>
    )
}
export default Counter;