import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementasync } from './store/actions/action'

const App = () => {
  const {value} = useSelector((state)=>state.counter)
  // console.log(value);

  const dispatch = useDispatch()
  
  return (
    <div className='text-red-600'>App
    
    <h2>{value}</h2>
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button> <br />
    <button onClick={()=>dispatch(incrementasync(5))}>increm by amt</button>
    </div>





  )
}

export default App