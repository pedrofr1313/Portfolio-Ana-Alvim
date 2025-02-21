import React from 'react'
import AnimatedFlower from './AnimatedFlower'
const Logo = () => {
    
  return (
    <div id="container" className='w-screen '>
    {/* Visivel em telas grandes */}
    <div className='hidden md:flex h-30 w-screen  justify-center '>
     
      <h1 className='text-9xl   text-black '>ANA ALVIM</h1>
  
   
    
    <AnimatedFlower 
    size={"size-25"}
    fill={"black"}
    stroke={"black"}
    y={-12}
   x={0}
     /> 
    
     
   
    </div>
   

  {/* Visivel em telas pequenas */}
    <div className='md:hidden flex h-20  w-screen  justify-center '>
      
      <div className='w-full flex justify-center'>
      <h1 className='text-[14vw] text-black font-bold font-loos-compresed'>ANA ALVIM</h1>
      <AnimatedFlower
   size={"size-15"}
   fill={"black"}
   stroke={"black"}
   y={-16} 
   transform={""}
   x={"0"}/>
      </div>

   </div>
    
    
  
   
    </div>
  )
}

export default Logo