import React from "react";
import Logo from "../components/Logo";


import { useEffect } from "react";
import AnimatedSvg from "../components/AnimatedSvg";
import { useMenu } from '../hooks/MenuContext'
const Home = () => {
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
    <div className={`w-full flex-col ${isMenuOpen && "overflow-y-hidden"}`}>
      <div className="w-screen ">
        <Logo />
      </div>

  <div className="w-full   ">
        <div className="hidden  md:pt-5 md:flex w-full  justify-center md:pr-22">
          <div className="w-full  ">
            <AnimatedSvg
              width={"w-full"}
              height={"h-150"}
              fill={"#CC3333"}
              stroke={"#CC3333"}
              y={-30}
              x={0}
            />
          </div>
        </div>
{/* aparece no celular */}
        <div className="flex pl-5 md:pt-5 md:hidden w-full h-100  justify-center md:pr-22">
          <div className="w-full  ">
            <AnimatedSvg
              width={"w-full"}
              height={"h-150"}
              fill={"#CC3333"}
              stroke={"#CC3333"}
              y={90}
              x={-10}
            />
          </div>
        </div>
  </div>
    
    
    </div>
  );
};

export default Home;
