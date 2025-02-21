import React from 'react'
import { motion } from 'motion/react'
const AnimatedSpiral = ({x,y,size}) => {
  return (
    <motion.svg initial="hidden" animate="visible" transform="rotate(80) scale(-1, 1)" id="Camada_1"  xmlns="http://www.w3.org/2000/svg" viewBox={`${x} ${y} 300 300`} className={`${size}  `} >
       <motion.path
                     d="M147.55,130.41s-5.21,22.06,6.47,18.74c11.68-3.32,31.51-29.27,13.89-39.28-17.62-10.01-49.19-3.65-50.15,28.37-.96,32.01,45.1,81.8,77.17,33.1,32.07-48.7,19.58-120.59-35.65-116.28-55.23,4.31-110.58,113.39-76.31,156.96,34.27,43.57,138.32,66.95,164.67-40.11,26.36-107.06-5.93-191.75-104.17-164.14C45.23,35.39,14.47,175.73,10.85,191.52c-22.67,98.97-1.1,119.83,88.62,171.22"
                     fill="transparent"
                     stroke="pink"
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
    </motion.svg>
  )
}

export default AnimatedSpiral