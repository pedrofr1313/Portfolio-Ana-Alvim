import React from 'react'
import { motion } from "motion/react"
const AnimatedSvg = ({width,height,fill,stroke,y,x}) => {
  return (
    
<motion.svg initial="hidden" animate="visible" id="Camada_1"  xmlns="http://www.w3.org/2000/svg" viewBox={`${x} ${y} 600 600`} className={`${width} ${height}  `} >
   
   <g transform='scale(8.0) translate(31,-9)'>
   <motion.path 
  transform="rotate(45)" d="M20.8,11.94c.09-.11.15-.25.17-.39.3-1.88,2.87-15.71,12.99-10.3,10.98,5.87,7.5,11.45,5.01,14.06-.9.95-12.06,3.12-12.99,2.88s.52.97,2.58,1.44c2.06.47,10.39-.78,11.58,4.94,1.19,5.71.29,7.81-.1,8.28s-9.81,5.98-12.6,4.45-4.42-8.54-6.94-9.71c-.93-.43-.81,8.49-4.57,10.34-3.76,1.85-11.47-.75-13.28-3.33-1.82-2.58-.65-10.78,4.47-13.19s3.3-2.59,3.04-2.63S-4.91,14.53,1.7,6.6C8.31-1.33,16.49.94,17.92,4.16s1.69,8.18,1.97,8.41c.2.17.67-.34.91-.63Z"
     fill={`${fill}`}
     stroke={`${stroke}`}
     strokeWidth="0.5"
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
   </g>
  <g transform=" ">
 <motion.path 
   fill="transparent"
   strokeWidth="4.5"
   stroke="black"
   strokeLinecap="round"
   fill-rule="evenodd"
   d="M167.42,429.16s-30.11-115.53-58.04-205.88C81.45,132.94,80.9,14.54,80.9,14.54c0,0,57.97-27.1,61.87,0,3.9,27.1-19.3,29.98-34.7,30.8-15.4.82-25.26-1.64-25.26-1.64"
   variants={{
     hidden: { pathLength: 0, opacity: 1, fillOpacity:0 },
     visible: {
       pathLength: 1,
       opacity: 1,
       fillOpacity:1,
       transition: {
         pathLength: {  duration: 3.7, ease: "easeInOut"},
        
        
           },
     },
   }}
   />
   <motion.path variants={{
     hidden: { pathLength: 0, opacity: 1, fillOpacity:0 },
     visible: {
       pathLength: 1,
       opacity: 1,
       fillOpacity:1,
       transition: {
         pathLength: {  duration: 3, ease: "easeInOut",delay:0.7},
        
        
           },
     },
   }} fill="transparent" stroke="#CC3333" strokeWidth="4.5" d="M144.65,344.81s-76.96,20.43-71,45.07c5.95,24.64,21.15,21.35,27.1,20.74,5.95-.62,56.55-19.49,56.55-19.49l-12.65-46.32Z"/>
   <motion.path variants={{
     hidden: { pathLength: 0, opacity: 1, fillOpacity:0 },
     visible: {
       pathLength: 1,
       opacity: 1,
       fillOpacity:1,
       transition: {
         pathLength: {  duration: 3, ease: "easeInOut",delay:1},
        
        
           },
     },
   }} fill="transparent" stroke="black" strokeWidth="4.5" d="M127.35,283.17s61.3-30.43,71.63-8.09-60.74,45.57-60.74,45.57c0,0-10.89-37.48-10.89-37.48Z"/>
   <motion.path variants={{
     hidden: { pathLength: 0, opacity: 1, fillOpacity:0 },
     visible: {
       pathLength: 1,
       opacity: 1,
       fillOpacity:1,
       transition: {
         pathLength: {  duration: 3, ease: "easeInOut",delay:1.3},
         
        
           },
     },
   }} fill="transparent" stroke="black" strokeWidth="4.5" d="M108.67,220.96s-82.11,14.87-67.12,45.28,78.84-6.46,78.84-6.46"/>
   <motion.path variants={{
     hidden: { pathLength: 0, opacity: 1, fillOpacity:0 },
     visible: {
       pathLength: 1,
       opacity: 1,
       fillOpacity:1,
       transition: {
         pathLength: {  duration: 3, ease: "easeInOut",delay:1.6},
           // Mais rápido
        
           },
     },
   }} fill="transparent" stroke="black" strokeWidth="4.5" d="M92.87,150.88s61.41-31.62,72.7-2.47c11.29,29.16-65.64,39.04-65.64,39.04"/>
   <motion.path variants={{
     hidden: { pathLength: 0, opacity: 1, fillOpacity:0 },
     visible: {
       pathLength: 1,
       opacity: 1,
       fillOpacity:1,
       transition: {
         pathLength: {  duration: 3, ease: "easeInOut",delay:1.7},
          // Mais rápido
        
           },
     },
   }} fill="transparent" stroke="black" strokeWidth="4.5" d="M84.11,78.56S3.97,68.95,2.54,98.52c-1.44,29.57,40.24,21.97,53.59,19.71,13.35-2.26,31.07-8.22,31.07-8.22"/>
      </g>

      <g transform='scale(0.8) translate(390,140)'>
        <motion.path
              d="M147.55,130.41s-5.21,22.06,6.47,18.74c11.68-3.32,31.51-29.27,13.89-39.28-17.62-10.01-49.19-3.65-50.15,28.37-.96,32.01,45.1,81.8,77.17,33.1,32.07-48.7,19.58-120.59-35.65-116.28-55.23,4.31-110.58,113.39-76.31,156.96,34.27,43.57,138.32,66.95,164.67-40.11,26.36-107.06-5.93-191.75-104.17-164.14C45.23,35.39,14.47,175.73,10.85,191.52c-22.67,98.97-1.1,119.83,88.62,171.22"
              fill="transparent"
              stroke="black"
              strokeWidth="7.5"
              strokeLinecap="round"
              fill-rule="evenodd"
              variants={{
                hidden: { pathLength: 0, opacity: 0, fillOpacity:0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  fillOpacity:1,
                  transition: { duration: 5, ease: "easeInOut",delay:2 },
                },
              }}
            />
      </g>
</motion.svg>

    
  )
}

export default AnimatedSvg