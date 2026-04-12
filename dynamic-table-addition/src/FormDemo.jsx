import { useForm } from "react-hook-form";
function FormDemo(){
    const {register,//to register form fields
        handleSubmit,//to handle for submission
        formState:{errors}}=useForm()//to handle validation
    const onsubmitfunc=(obj)=>{
        console.log(obj);
    }
    return(
        <div className="rounded border-2 shadow-2xl w-2xl p-5 block mx-auto">
            <h1 className="text-center text-4xl my-2.5">Form Demo</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onsubmitfunc)}>
                <div className="text-center">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" {...register("username",{
                        required:"username required",
                        validate:(v)=>v.trim().length!==0 || "white space is not valid",
                        minLength:4,
                        maxLength:7
                    })} className="border-2 w-full p-3"/>
                    {errors.username?.type==="required" && <p className="text-red-500">{errors.username.message}</p>}
                    {errors.username?.type==="validate" && <p className="text-red-500">{errors.username.message}</p>}
                    {errors.username?.type==="minLength" && <p className="text-red-500">min length is 4</p>}
                    {errors.username?.type==="maxLength" && <p className="text-red-500">max length is 7</p>}
                    
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" {...register("email",{
                        required:"email required",
                        minLength:5
                    })} className="border-2 w-full p-3"/>
                    {errors.email?.type==="required" && <p className="text-red-500">{errors.email.message}</p>}
                    {errors.email?.type==="minLength" && <p className="text-red-500">min length is 4</p>}
                    <button type="submit" className="p-2 bg-cyan-400 mt-2.5">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default FormDemo;