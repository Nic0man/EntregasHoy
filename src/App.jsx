import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Login } from './Components/Login'
import { Plantilla } from './Components/Plantilla'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<h1>REGISTRO</h1>}></Route>
        <Route path="/login" element={<Plantilla/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
