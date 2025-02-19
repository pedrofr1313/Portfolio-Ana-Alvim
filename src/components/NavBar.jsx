import React from 'react'

import { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { useMenu } from '../hooks/MenuContext'
import { useLanguageButton } from '../hooks/LanguageContext'
const NavBar = () => {

const{isInEnglish, changeLanguage} = useLanguageButton();
const { isMenuOpen, toggleMenu } = useMenu();
  return (
    <nav className='h-25'>
{/* Aparece em telas grandes */}
<div className='hidden md:flex w-screen   pt-5 pl-3' >
  <div className='flex w-1/4 justify-start p-4 ml-10'>
    <a className='z-20 ' onClick={() => toggleMenu()}>
    <svg id="Camada_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.53 300 " className={`size-20 ${isMenuOpen ? "fill-white" : "fill-black"}`}>
    <g transform='translate(0,0)'>
    <path d="M20.8,11.94c.09-.11.15-.25.17-.39.3-1.88,2.87-15.71,12.99-10.3,10.98,5.87,7.5,11.45,5.01,14.06-.9.95-12.06,3.12-12.99,2.88s.52.97,2.58,1.44c2.06.47,10.39-.78,11.58,4.94,1.19,5.71.29,7.81-.1,8.28s-9.81,5.98-12.6,4.45-4.42-8.54-6.94-9.71c-.93-.43-.81,8.49-4.57,10.34-3.76,1.85-11.47-.75-13.28-3.33-1.82-2.58-.65-10.78,4.47-13.19s3.3-2.59,3.04-2.63S-4.91,14.53,1.7,6.6C8.31-1.33,16.49.94,17.92,4.16s1.69,8.18,1.97,8.41c.2.17.67-.34.91-.63Z"/>
    </g>
    <g transform='translate(0,60)'>
    <path d="M20.8,11.94c.09-.11.15-.25.17-.39.3-1.88,2.87-15.71,12.99-10.3,10.98,5.87,7.5,11.45,5.01,14.06-.9.95-12.06,3.12-12.99,2.88s.52.97,2.58,1.44c2.06.47,10.39-.78,11.58,4.94,1.19,5.71.29,7.81-.1,8.28s-9.81,5.98-12.6,4.45-4.42-8.54-6.94-9.71c-.93-.43-.81,8.49-4.57,10.34-3.76,1.85-11.47-.75-13.28-3.33-1.82-2.58-.65-10.78,4.47-13.19s3.3-2.59,3.04-2.63S-4.91,14.53,1.7,6.6C8.31-1.33,16.49.94,17.92,4.16s1.69,8.18,1.97,8.41c.2.17.67-.34.91-.63Z"/>
    </g>
    <g transform='translate(0,120)'>
    <path d="M20.8,11.94c.09-.11.15-.25.17-.39.3-1.88,2.87-15.71,12.99-10.3,10.98,5.87,7.5,11.45,5.01,14.06-.9.95-12.06,3.12-12.99,2.88s.52.97,2.58,1.44c2.06.47,10.39-.78,11.58,4.94,1.19,5.71.29,7.81-.1,8.28s-9.81,5.98-12.6,4.45-4.42-8.54-6.94-9.71c-.93-.43-.81,8.49-4.57,10.34-3.76,1.85-11.47-.75-13.28-3.33-1.82-2.58-.65-10.78,4.47-13.19s3.3-2.59,3.04-2.63S-4.91,14.53,1.7,6.6C8.31-1.33,16.49.94,17.92,4.16s1.69,8.18,1.97,8.41c.2.17.67-.34.91-.63Z"/>
    </g>
</svg>
    </a>
      </div>
      <div className='w-3/4 flex justify-end pr-30 pt-5'>
     {isInEnglish ? <button style={{ backgroundColor: "#CC3333" }} onClick={()=> changeLanguage()}  className='h-10 w-15 rounded-lg hover:underline hover:italic text-neutral-50 bg-[#CC3333]'>PT  </button>
: <button style={{ backgroundColor: "#CC3333" }} onClick={()=> changeLanguage()} className='h-10 w-15 rounded-lg hover:underline hover:italic text-neutral-50 bg-[#CC3333]'>EN  </button>}
      </div>

      {isMenuOpen && (
        <AnimatePresence>
        <motion.div
        initial={{ opacity: 1, y: -1100 }} 
        animate={{ opacity: 1, y: 0 }} // Aparece suavemente
        exit={{ opacity: 0, y: -1000 }} // Sai suavemente ao fechar
        transition={{ duration: 0.8 }} // Tempo da animação 
        className="fixed dropdown-menu z-10 left-19 top-5 w-250 h-3/4 bg-neutral-950 z-10 text-white flex flex-col justify-center items-center overflow-y-auto rounded-lg pl-10 shadow-lg pt-32">
          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="ç font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">CASA ÂMBAR </a>
         
:    <a href="#" id='sobre' className="ç font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">CASA ÂMBAR </a>     }
          </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="ç py-2 font-elza hover:italic hover:underline hover:text-[#CC3333] px-4  te text-center hover:underline hover:text-[#CC3333]  text-2xl ">CHIMBAL MENU</a>
          :    <a href="#" id='sobre' className="ç font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">MENU CHIMBAL </a>     }
          </div>
         
          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="ç py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333]  text-center text-2xl ">MODULES FOR CATS</a>
          :    <a href="#" id='sobre' className="ç font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">MÓDULOS PARA GATOS </a>     }
          </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="ç py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">X-STRIKE</a>
          :    <a href="#" id='sobre' className="ç font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">X-STRIKE </a>     }
          </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
             { isInEnglish ?
          <a href="#" id='sobre' className="ç py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333]  text-center text-2xl ">ZINE GISELLE</a>
          :    <a href="#" id='sobre' className="ç font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">ZINE GISELLE </a>     }
          </div>
         

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
             { isInEnglish ?
          <a href="#" id='sobre' className="ç py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">HILTON</a>
          :    <a href="#" id='sobre' className="ç font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">HILTON </a>     }
          </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
             { isInEnglish ?
          <a href="#" id='sobre' className="ç py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">CARAÍVA</a>
          :    <a href="#" id='sobre' className="ç font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">CARAÍVA </a>     }
          </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
             { isInEnglish ?
          <a href="#" id='sobre' className="ç py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">CROQUIS BH</a>
          :    <a href="#" id='sobre' className="ç font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">CROQUIS BH </a>     }
          </div>

         
          
        </motion.div>
        </AnimatePresence>
      )}
</div>

{/* Aparece em telas pequenas */}
  <div className='md:hidden flex w-screen   '>
      <div className='flex  w-1/2 justify-start pt-10'>
      <a className='z-20 ' onClick={() => toggleMenu()}>
    <svg id="Camada_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.53 300 " className={`size-20 ${isMenuOpen ? "fill-white" : "fill-black"} `}>
    <g transform='translate(0,0)'>
    <path d="M20.8,11.94c.09-.11.15-.25.17-.39.3-1.88,2.87-15.71,12.99-10.3,10.98,5.87,7.5,11.45,5.01,14.06-.9.95-12.06,3.12-12.99,2.88s.52.97,2.58,1.44c2.06.47,10.39-.78,11.58,4.94,1.19,5.71.29,7.81-.1,8.28s-9.81,5.98-12.6,4.45-4.42-8.54-6.94-9.71c-.93-.43-.81,8.49-4.57,10.34-3.76,1.85-11.47-.75-13.28-3.33-1.82-2.58-.65-10.78,4.47-13.19s3.3-2.59,3.04-2.63S-4.91,14.53,1.7,6.6C8.31-1.33,16.49.94,17.92,4.16s1.69,8.18,1.97,8.41c.2.17.67-.34.91-.63Z"/>
    </g>
    <g transform='translate(0,60)'>
    <path d="M20.8,11.94c.09-.11.15-.25.17-.39.3-1.88,2.87-15.71,12.99-10.3,10.98,5.87,7.5,11.45,5.01,14.06-.9.95-12.06,3.12-12.99,2.88s.52.97,2.58,1.44c2.06.47,10.39-.78,11.58,4.94,1.19,5.71.29,7.81-.1,8.28s-9.81,5.98-12.6,4.45-4.42-8.54-6.94-9.71c-.93-.43-.81,8.49-4.57,10.34-3.76,1.85-11.47-.75-13.28-3.33-1.82-2.58-.65-10.78,4.47-13.19s3.3-2.59,3.04-2.63S-4.91,14.53,1.7,6.6C8.31-1.33,16.49.94,17.92,4.16s1.69,8.18,1.97,8.41c.2.17.67-.34.91-.63Z"/>
    </g>
    <g transform='translate(0,120)'>
    <path d="M20.8,11.94c.09-.11.15-.25.17-.39.3-1.88,2.87-15.71,12.99-10.3,10.98,5.87,7.5,11.45,5.01,14.06-.9.95-12.06,3.12-12.99,2.88s.52.97,2.58,1.44c2.06.47,10.39-.78,11.58,4.94,1.19,5.71.29,7.81-.1,8.28s-9.81,5.98-12.6,4.45-4.42-8.54-6.94-9.71c-.93-.43-.81,8.49-4.57,10.34-3.76,1.85-11.47-.75-13.28-3.33-1.82-2.58-.65-10.78,4.47-13.19s3.3-2.59,3.04-2.63S-4.91,14.53,1.7,6.6C8.31-1.33,16.49.94,17.92,4.16s1.69,8.18,1.97,8.41c.2.17.67-.34.91-.63Z"/>
    </g>
</svg>
    </a>
      </div>
      
    <div className='flex  w-1/2 pl-20 pt-3 justify-center items-center'>
    {isInEnglish ? <button onClick={()=> changeLanguage()} style={{ backgroundColor: "white" }}  className='h-10 w-15 rounded-lg underline hover:italic text-neutral-950 bg-[#CC3333]'>PT  </button>
: <button style={{ backgroundColor: "white" }} onClick={()=> changeLanguage()} className='h-10 w-15 rounded-lg underline hover:italic text-neutral-950 bg-[#CC3333]'>EN  </button>}
     
    </div>
 {/* Menu dropdown */}
 {isMenuOpen && (
        <motion.div
        initial={{ opacity: 1, y: -1035 }} 
        animate={{ opacity: 1, y: 0 }} // Aparece suavemente
        exit={{ opacity: 0, y: 30 }} // Sai suavemente ao fechar
        transition={{ duration: 1.0 }} // Tempo da animação 
        className="fixed h-full bg-neutral-950 left-0 top-0 z-10 w-screen  text-white flex flex-col justify-center items-center  ">
          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className=" py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">CASA ÂMBAR</a>
          :    <a href="#" id='sobre' className=" font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">CASA ÂMBAR </a>     }
          </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">CHIMBAL MENU</a>
          :    <a href="#" id='sobre' className="font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">MENU CHIMBAL </a>     }
          
          </div>
         
          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">MODULES FOR CATS</a>
          :    <a href="#" id='sobre' className="font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">MÓDULOS PARA GATOS </a>     }
          </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">X-STRIKE</a>
          :    <a href="#" id='sobre' className="font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">X-STRIKE </a>     }
                   </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">ZINE GISELLE</a>
          :    <a href="#" id='sobre' className="font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">ZINE GISELLE </a>     }
          </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">HILTON</a>
          :    <a href="#" id='sobre' className="font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">HILTON </a>     }
          </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">CARAÍVA</a>
          :    <a href="#" id='sobre' className="font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">CARAÍVA </a>     }
          </div>

          <div className="py-1 px-4 flex w-4/4  border-gray-700">
          { isInEnglish ?
          <a href="#" id='sobre' className="py-2 px-4 font-elza hover:italic hover:underline hover:text-[#CC3333] te text-center text-2xl ">CROQUIS BH</a>
          :    <a href="#" id='sobre' className="font-elza hover:italic hover:underline hover:text-[#CC3333] py-2 px-4  text-center text-2xl ">CROQUIS BH </a>     }
          </div>
          
        </motion.div>
      )}



  </div>

 
    

    </nav>
  )
}

export default NavBar