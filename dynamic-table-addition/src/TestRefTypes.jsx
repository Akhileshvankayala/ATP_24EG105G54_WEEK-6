import { useState } from "react";
function TestRefTypes(){
    const [user,setUser]=useState({username:"teddy",age:"29",city:"hyd"})
    const [marks,setMarks]=useState([10,20,30]);
    const updateUser=()=>{
        setUser({...user,username:"bubbles"})
    }
    const updateMarks=()=>{
        setMarks([...marks,40])
    }
    return(
        <div>  
            <p>username:{user.username}</p>
            <p>username:{user.age}</p>
            <p>username:{user.city}</p>
            <button onClick={updateUser}>user</button>
            {
                marks.map((mark)=><p key={mark}>{mark}</p>)
            }
            <button onClick={updateMarks}>marks</button>
        </div>
    )
}
export default TestRefTypes