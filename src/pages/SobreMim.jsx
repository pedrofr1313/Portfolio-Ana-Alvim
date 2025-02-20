import React from "react";
import fotoAna from "../assets/images/img-sobre-ana.png"
import fotoDesenho from "../assets/images/imgsite-desenho.png"
import { motion } from "motion/react"

const SobreMim = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">

      <div className="flex w-full justify-start mb-8">
        <h1 className="text-4xl pl-5 text-black ">sobre mim...</h1>
      </div>

      <motion.div className="flex w-90/100 h-60  justify-center mb-5"
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }} // Aparece suavemente
      exit={{ opacity: 0, y: -1000 }} // Sai suavemente ao fechar
      transition={{ duration: 1.5 }}
      
      >
        <div className="w-55/100 flex justify-start ">
         <img src={fotoAna} className=" " alt="" />
         </div>

         <div className="w-45/100  h-full pt-2">
          <p className="text-black text-right h-full text-xs">Me chamo Ana Alvim, tenho 20 anos, estudo Design na UFMG e atuo como designer e ilustradora em Belo Horizonte <br />
           <br />Desde criança tenho interesse pelas artes, o que me aproximou do desenho e da pintura, assim como da dança e da música </p>
         </div>

      </motion.div>


      <motion.div className="flex w-90/100 h-60  " initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} // Aparece suavemente
      exit={{ opacity: 0, y: -1000 }} // Sai suavemente ao fechar
      transition={{ duration: 1.5 }}>

     <div className="flex w-65/100 justify-center  ">
     <p className="text-black text-xs text-left ">
     Por isso, hoje sou bailarina e trabalho com design e arte. <br /> <br /> Comecei a trabalhar aos 17 anos fazendo encomendas de 
     desenhos para pessoas que me conheciam e encontrei uma rede de demanda pelo meu trabalho que me incentivou a continuar estudando e aprimorando minhas habilidades.
     </p>
     </div>
     <div className="flex w-35/50 justify-end  h-78/100 ">
      <img src={fotoDesenho} alt="" />
     </div>


      </motion.div>
    </div >
  );
};

export default SobreMim;
