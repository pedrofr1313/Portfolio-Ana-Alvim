import React from 'react'
import { motion } from 'motion/react'
import menuFoto from "../assets/images/imgsite-menu-casamento.png"
import { useInView } from 'motion/react'
import { useRef } from 'react'

const SecaoMenu = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" }) //retorna true quando "ref" aparece na tela
      
  return (
    <motion.div className='h-70 mb-100 w-90/100 justify-center flex items-start  flex-wrap'
    ref={ref}
    initial={{ opacity: 0, x: -100 }} 
      animate={isInView &&{ opacity: 1, x: 0 }} // Aparece suavemente
       // Sai suavemente ao fechar
      transition={{ duration: 1.5 ,delay:0.5}}>
     <div className='w-6/10 flex items-start '>
     <p className='h-auto text-left text-xs text-black'>
     Ofereci serviços como ilustradora, para a Hilton, também. <br /><br /> O contato diário na Hilton com os papéis de qualidade 
     importados, o maquinário refinado, as técnicas de impressão cuidadosas e a equipe atenta a cada palavra e traço impressos, assim como às cores e às texturas,
      me ajudou imensamente a desenvolver um olhar cuidadoso e aprender muito sobre a área gráfica. 
     </p>
     </div>

     <div className='w-4/10 flex items-start h-65/100  '>
   <img src={menuFoto} alt="" className='h-full' />
     </div>
     
     <div className='w-full flex items-start  '>
<p className='text-xs text-black '>
Atualmente, faço trabalhos de ilustração e design gráfico como freelancer e estudo Design na Universidade Federal de Minas Gerais.
</p>
     </div>
    </motion.div>
  )
}

export default SecaoMenu