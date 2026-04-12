import { Schema,model } from "mongoose";

const employeeSchema=new Schema({
    name:{
        type:String,
        required:[true,"product id is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already existed"]
    },
    mobile:{
        type:Number,
        required:[true,"mobile is required"],
        unique:[true,"mobile already existed"]
    },
    designation:{
        type:String,
        required:[true,"designation is required"]
    },
    companyName:{
     type:String,
        required:[true,"company name is required"]   
    }
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
},);

export const employeeModel=model("employee",employeeSchema);