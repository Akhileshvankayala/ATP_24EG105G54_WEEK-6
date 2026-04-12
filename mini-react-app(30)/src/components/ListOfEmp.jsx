import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function ListOfEmps() {
  const [emps, setEmps] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getEmps() {
      let res = await axios.get("http://localhost:4000/employee-api/employee");
      if (res.status === 200) {
        let resObj = res.data;
        setEmps(resObj.payload);
      }
    }

  useEffect(() => {
    getEmps();

  }, []);

const navigate=useNavigate();
const getEmployee=(empObj)=>{
  try{
    setLoading(true);
    navigate("/employee",{state:empObj})
  }catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
  }finally {
      setLoading(false);
    }
}


const editEmployee=(empObj)=>{
  setLoading(true);

  try{
    setLoading(true);
    navigate("/edit-emp",{state:empObj})
  }catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
  }finally {
      setLoading(false);
    }
}
const deleteEmployee=async(email)=>{

   try{
    setLoading(true);
    let res = await axios.delete(`http://localhost:4000/employee-api/employee/${email}`);
    if(res.status===200){
    getEmps()
  }
  }catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
  }finally {
      setLoading(false);
    }
}

if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 rounded-3xl m-4 text-center">
            <p>{empObj.email}</p>
            <p className="mb-3">{empObj.name}</p>
          <div className="flex justify-around">
            <button onClick={()=>getEmployee(empObj)} className=" bg-blue-300 rounded-2xl p-3 border">view</button>
            <button onClick={()=>editEmployee(empObj)} className=" bg-blue-300 rounded-2xl p-3 border">edit</button>
            <button onClick={()=>deleteEmployee(empObj.email)} className=" bg-blue-300 rounded-2xl p-3 border">delete</button>
        </div>
          </div>
          
        ))}
        
      </div>
    </div>
  );
}

export default ListOfEmps;