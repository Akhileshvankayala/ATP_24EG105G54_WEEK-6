import {useContext} from "react"
import { counterContextObj } from "../contexts/ContextProvider"
import { useCounterStore } from "../stores/useCounterStore.js";

function Test() {

  const {counter1,changeCounter1}=useContext(counterContextObj);
  console.log("test rendered");
let newCounter=useCounterStore((state)=>state.newCounter);
let incrementCounter=useCounterStore((state)=>state.incrementCounter);

  return (
    <div>
      <h1>counter:{counter1}</h1>
      <button onClick={changeCounter1} className="p-5 bg-blue-300">change</button>
      <h1>New counter:{newCounter}</h1>
      <button onClick={incrementCounter} className="p-5 bg-blue-300">incrementCounter</button>
    </div>
  )
}

export default Test