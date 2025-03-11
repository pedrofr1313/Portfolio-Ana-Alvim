import React from 'react'
import { motion } from 'motion/react'
import fotoBallet from '../assets/images/imgsite-aula-ballet.png'
import AnimatedSpiral from './AnimatedSpiral'

const BalletSection = () => {
  return (
    <motion.div className='h-50  w-90/100 justify-center flex'
    initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }} // Aparece suavemente
      exit={{ opacity: 0, y: -1000 }} // Sai suavemente ao fechar
      transition={{ duration: 1.5,delay:3}}>


    <div className='w-40/100 h-full relative'>
        <img src={fotoBallet} alt="" className='h-full' />
        <div className='absolute h-3/4 w-3/4 left-4/10 h-full top-45/100 '>
         <AnimatedSpiral
         x={0}
         y={0}
         size={"size-full"}
         />
        </div>
    </div>


    <div className='w-60/100 h-full relative flex justify-end'>
<p className='text-right text-xs text-black  w-90/100'> 
Em 2023, fui professora de ballet infantil na Escola Casa da Gente, em Belo Horizonte, e ensinar essa arte para crianças foi uma experiência muito rica para mim. Nunca tinha dado aulas antes 
e achei desafiador o dia a dia em que tinha que criar um universo que fizessem as crianças gostarem do ballet clássico e se interesassem por essa arte.
</p>
    </div>
    
     

    </motion.div>
  )
}

export default BalletSection