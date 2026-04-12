import exp from 'express'
import { employeeModel } from '../models/employeeModel.js'
export const employeeApp=exp.Router()


employeeApp.get('/employee',async(req,res)=>{
    let empList = await employeeModel.find();
  res.status(200).json({ message: "list of emps", payload: empList });
})

employeeApp.post('/employee',async(req,res)=>{
    const emp=req.body
    const employee=new employeeModel(emp);
    const result=await employee.save();
    res.status(201).json({message:"user succesfully created",payload:result})
})

employeeApp.put('/employee/:email',async(req,res)=>{
    const email=req.params.email;
    const modifiedDetails=req.body;
    const result=await employeeModel.findOneAndUpdate({email:email},{$set:{...modifiedDetails}},{returnDocument:"after"});
    if(result===null){
        res.status(404).json({message:"user not found"});
    }
    return res.status(200).json({message:"user data is updated",payload:result});
})

employeeApp.delete('/employee/:email',async(req,res)=>{
    const email=req.params.email
    const result=await employeeModel.findOneAndDelete({email:email})
    if(result===null){
        res.status(404).json({message:"user not found"});
    }
    return res.status(200).json({message:"user succesfully deleted"});
})