import React from 'react'
import { motion } from "motion/react"
const AnimatedFlower = ({size,fill,stroke,y,transform,x}) => {
  
  return (
    
<motion.svg initial="hidden" animate="visible" id="Camada_1"  xmlns="http://www.w3.org/2000/svg" viewBox={`${x} ${y} 50.53 60 `} className={`${size} `}>
   
   <motion.path d="M20.8,11.94c.09-.11.15-.25.17-.39.3-1.88,2.87-15.71,12.99-10.3,10.98,5.87,7.5,11.45,5.01,14.06-.9.95-12.06,3.12-12.99,2.88s.52.97,2.58,1.44c2.06.47,10.39-.78,11.58,4.94,1.19,5.71.29,7.81-.1,8.28s-9.81,5.98-12.6,4.45-4.42-8.54-6.94-9.71c-.93-.43-.81,8.49-4.57,10.34-3.76,1.85-11.47-.75-13.28-3.33-1.82-2.58-.65-10.78,4.47-13.19s3.3-2.59,3.04-2.63S-4.91,14.53,1.7,6.6C8.31-1.33,16.49.94,17.92,4.16s1.69,8.18,1.97,8.41c.2.17.67-.34.91-.63Z"
     fill={`${fill}`}
     stroke={`${stroke}`}
     strokeWidth="0.5"
     transform={transform}
   variants={{
           hidden: { pathLength: 0, opacity: 0, fillOpacity:0 },
           visible: {
             pathLength: 1,
             opacity: 1,
             fillOpacity:1,
             transition: {
               pathLength: {  duration: 3, ease: "easeInOut",},
               opacity: { duration: 5.5, ease: "easeInOut", },  // Mais rápido
               fillOpacity: { duration: 5.5, ease: "easeInOut" }
                 },
           },
         }}
   />
  
</motion.svg>
    
  )
}

export default AnimatedFlower