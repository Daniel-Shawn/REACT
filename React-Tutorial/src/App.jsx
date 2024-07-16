
import './App.css'

import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { RenderNavbar } from './components/Navbar'




function App() {
  const [counter, setCounter] = useState(0)

  function clickMe() {
    setCounter((count) => count + 1)
  }

  const navigate = useNavigate()
  if (counter >= 10){
    navigate('/account/login')
  }


  return (
    <>
    <RenderNavbar />
    <p>You clicked {counter} times..</p>
    <button onClick={clickMe}>Click Me</button>
    <Outlet />
    </>
  )

}

export default App
