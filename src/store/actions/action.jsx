export { increment,decrement, } from "../reducers/counterSlice";

import {incrementbyamount} from "../reducers/counterSlice"

export const incrementasync = (value)=> (dispatch)=>{
    console.log(value);
    
setTimeout(()=>{
    dispatch(incrementbyamount(value));
},2000)

}
