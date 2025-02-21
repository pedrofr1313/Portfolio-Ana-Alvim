import React from "react";
import fotoAna from "../assets/images/img-sobre-ana.png"
import fotoDesenho from "../assets/images/imgsite-desenho.png"
import { motion } from "motion/react"
import AnimatedFlower from "../components/AnimatedFlower";
import BalletSection from "../components/BalletSection";
import { useMenu } from '../hooks/MenuContext'
import { useEffect,useState } from "react";
const SobreMim = () => {
   const{isMenuOpen} =useMenu();
    useEffect(() => {
      if (isMenuOpen) {
        document.documentElement.style.overflow = "hidden"; // Remove rolagem do <html>
        document.body.style.overflow = "hidden"; // Remove rolagem do <body>
      } else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    
      return () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      };
    }, [isMenuOpen]);
  
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-y-hidden ">

      <div className="flex w-full justify-start mb-8">
        <h1 className="text-4xl pl-7 text-black ">sobre mim...</h1>
      </div>

<div className="w-full">
      <motion.div className="flex w-95/100 h-60  justify-start  "
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }} // Aparece suavemente
      exit={{ opacity: 0, y: -1000 }} // Sai suavemente ao fechar
      transition={{ duration: 1.5 }}
      
      >
        <div className="w-55/100 flex justify-start ">
         <img src={fotoAna} className=" " alt="" />
         </div>

         <div className="w-45/100  flex items-center  h-full ">
        
          <p className="text-black text-right  text-xs">Me chamo Ana Alvim, tenho 20 anos, estudo Design na UFMG e atuo como designer e ilustradora em Belo Horizonte <br />
           <br />Desde criança tenho interesse pelas artes, o que me aproximou do desenho e da pintura, assim como da dança e da música </p>
           
         </div>

      </motion.div>
</div>

      <motion.div className="flex w-90/100 h-60  justify-center  items-center" initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} // Aparece suavemente
      exit={{ opacity: 0, y: -1000 }} // Sai suavemente ao fechar
      transition={{ duration: 1.5, delay:1.5 }}>

     <div className="flex w-60/100 justify-start h-78/100  ">
     <p className="text-black text-xs w-85/100 text-left ">
     Por isso, hoje sou bailarina e trabalho com design e arte. <br /> <br /> Comecei a trabalhar aos 17 anos fazendo encomendas de 
     desenhos para pessoas que me conheciam e encontrei uma rede de demanda pelo meu trabalho, o que me incentivou a continuar estudando e aprimorando minhas habilidades.
     </p>
     </div>

     <div className="flex w-40/100 justify-end  h-78/100 ">
       <div className="relative h-full">
       <div className="absolute -top-18/100 -left-18/100  h-40/100 w-40/100">
      <AnimatedFlower
      size={"size-full"}
      fill={"green"}
      stroke={"green"}
      y={0}
      transform={"rotate(45)"}
      x={"-24"}
     />
     </div>
       <img src={fotoDesenho} alt="" className="h-full" />
       </div>
     
     
     </div>
      </motion.div>

    <BalletSection/>

    </div >
  );
};

export default SobreMim;
