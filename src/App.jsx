import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from "motion/react"
import './App.css'
import NavBar from './components/NavBar'

import SobreMim from './pages/SobreMim'
import { MenuProvider } from './hooks/MenuContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { LanguageProvider } from './hooks/LanguageContext'
function App() {
  const [count, setCount] = useState(0)

  
  return (
<div className='w-full p-0 m-0 '>
<MenuProvider>
<LanguageProvider>
<BrowserRouter>

 <NavBar/>
 

 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Sobre" element={<SobreMim/>} />
  
 </Routes>
 
 </BrowserRouter>
 </LanguageProvider>
  
 </MenuProvider>
</div>


  )
}

export default App
