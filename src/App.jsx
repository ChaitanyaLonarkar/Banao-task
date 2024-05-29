import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addnew from './Components/Addnew';
import Navbarr from './Components/Navbarr';
import Footer from "./Components/Footer"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbarr/>
      <Routes>
        {/* <Route path="/" element={<Home/>}> */}
          <Route path='/addnew' element={< Addnew/>} />
          <Route path='/' element={< Home/>} />

          
        {/* </Route> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
