import { useState } from "react"
import { useEffect } from "react"
function APIDemo(){
    const [count,setCount]=useState(0)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null);
    // const changeCount=()=>{
    //     setCount(count+1)
    // }
    const [usersList,setUsers]=useState([]);
    console.log("component rendered")
    useEffect(()=>{
        setLoading(true);
       // console.log("useEffect executed")   //console.log is a side effect action
       async function getData(){
        try{
        let res=await fetch("https://jsonplaceholder.typicode.com/posts");
        let usersList=await res.json();
        setUsers(usersList);
       }catch(err){
        console.log(err)
        setError(!null)
       }finally{
        setLoading(false)
       }
    }
       getData();
    },[])//    []--->dependency array is used only when we want to use useEffect onnce at the time of initial render

    //order is important-loaing then error checking the if both failed i.e success then we need to return the data
    if(loading){
        return(
            <p>
                Loading.....
            </p>
        )
    }
    if(error!==null){
        return (
            <p className="text-red-600">failed to fetch</p>
        )
    }
    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* <p className="text-3xl">count:{count}</p>
            <button className="px-2 mt-1.5 bg-cyan-300 rounded-3xl" onClick={changeCount}>increment</button> */}
            {/* <p>usersList:{usersList}</p> */}
            {
            usersList.map(user=>(
                <div className="text-center">
                    <p className="text-3xl text-cyan-500 ">{user.title}</p>
                    <p className="text-2xl text-rose-300">{user.body}</p>
                </div>
            ))
        }
        </div>
    )
}
export default APIDemo