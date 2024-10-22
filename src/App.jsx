import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const count = useSelector((state)=>state.counter)
  console.log(count);
  
  return (
    <div className='text-red-600'>App</div>
  )
}

export default App