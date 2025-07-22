import React from 'react'
import { RouterProvider } from 'react-router-dom'
import root from './router/root'

function App() {
  return (
    <>
    <RouterProvider router = {root}/>
    <div className='text-3xl font-bold underline bg-red-100'>Hello World!</div>
    </>
  
  )
}

export default App