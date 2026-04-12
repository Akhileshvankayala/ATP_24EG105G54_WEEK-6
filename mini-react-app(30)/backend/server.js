import exp from 'express'
import {connect} from 'mongoose'
import { employeeApp } from './APIs/employeeApi.js';
import {config} from 'dotenv'
import cors from 'cors'
config();

const app=exp()
app.use(cors({
    origin:['http://localhost:5173']
}))
app.use(exp.json())

app.use('/employee-api',employeeApp)
const port=process.env.PORT || 4000
async function connectDB(){
    try{
    await connect(process.env.DB_URL)//127.0.0.1:27017
    console.log("DB connected successfully")
    //start http server only when the databse conection is sucecsful
    app.listen(port,()=>console.log("server started on port no 4000"))//http server will start here
    }catch(err){
        console.log("error in db connection:",err)
    }
}
connectDB()

app.use((err,req,res,next)=>{
    console.log(err.message);
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"error is below",error:err.message})
    }
    if(err.name==="CastError"){
        return res.status(400).json({message:"error is below",error:err.message})
    }
    
    return res.status(500).json({message:"error is below",error:"server side error"})
    
})