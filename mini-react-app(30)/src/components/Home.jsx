import {useContext} from "react"
import { counterContextObj } from "../contexts/ContextProvider"
import Test from "./Test";
import { useCounterStore } from "../stores/useCounterStore";
function Home() {
const {counter,changeCounter}=useContext(counterContextObj);

let newCounter=useCounterStore((state)=>state.newCounter);
let incrementCounter=useCounterStore((state)=>state.incrementCounter);

console.log("Home rendered")
    return (
    <div>
      <h1>counter:{counter}</h1>
      <button onClick={changeCounter} className="p-5 bg-blue-300">change</button>
      < Test />
      <h1>New counter:{newCounter}</h1>
      <button onClick={incrementCounter} className="p-5 bg-blue-300">incrementCounter</button>
    </div>
  )
}

export default Home
