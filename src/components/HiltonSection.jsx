import React from 'react'
import HiltonImg from '../assets/images/imgsite-4-hilton.png'
import { motion } from 'motion/react'
import AnimatedFlower from './AnimatedFlower'
import { useInView } from 'motion/react'
import { useRef } from 'react'
const HiltonSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" }) //retorna true quando "ref" aparece na tela
  return (
    <motion.div className='h-52 w-90/100 justify-center flex items-center  '
    ref={ref}
    initial={{ opacity: 0, x: 100 }} 
      animate={isInView &&{ opacity: 1, x: 0 }} // Aparece suavemente
       // Sai suavemente ao fechar
      transition={{ duration: 1.5 ,delay:0.5}}
     > 
      
    <div className='w-35/100 h-full flex items-center '>

       <div className="relative h-55/100 flex items-end ">

       <div className="absolute -bottom-18/100 -left-18/100  h-50/100 w-40/100">
      <AnimatedFlower
      size={"size-full"}
      fill={"blue"}
      stroke={"blue"}
      y={0}
      transform={"rotate(45)"}
      x={"-24"}
     />
     </div>

     <img src={HiltonImg} alt="" className="h-full" />
       </div>
    </div>

    <div className='h-full w-65/100 flex items-center '>
    <p className='text-xs text-black text-right'>  Em 2024, estagiei no setor de design gráfico na Hilton Impressos de Luxo, 
      gráfica mineira famosa pela excelência na produção de papelarias de alto nível, principalmente de 
      festas e eventos. Esse foi meu primeiro contato trabalhando com design edespertou o meu interesse pelo ramo.</p>
    </div>
    
    </motion.div>
  )
}

export default HiltonSection