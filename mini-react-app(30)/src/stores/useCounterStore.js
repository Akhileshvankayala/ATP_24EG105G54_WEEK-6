import {create} from 'zustand'
export const useCounterStore=create((set)=>({
    //create a state
    newCounter:0,
    newCounter1:100,

    //add userState *name,age,email
    user:{name:"teddy",email:"teddy@mail.com",age:10},
    changeEmail:()=>set({...user,email:"teddylu@mail.com"}),
    //function to change the name and age
    changeName:()=>set({...user,name:"teddy nana",age:19}),

    //functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
//function to change the new counter  to 500
    changeCounter:()=>set({newCounter:500}),
//function to decrement the counter by 20
    decrementCounterBy:()=>set(state=>({newCounter:state.newCounter-20})),
    resetCounter:()=>set({newCounter:0})
}));