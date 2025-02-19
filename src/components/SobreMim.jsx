import React from "react";
import fotoAna from "../assets/images/img-sobre-ana.png"

const SobreMim = () => {
  return (
    <div className="w-full  flex-col justify-center ">
      <div className="flex w-full justify-start mb-8">
        <h1 className="text-4xl pl-5 text-black ">sobre mim...</h1>
      </div>

      <div className="flex w-full h-70 justify-center ">
        <div className="w-1/2 flex ">
         <img src={fotoAna} className="w-full h-full" alt="" />
         </div>

         <div className="w-1/2 pr-4 pt-2">
          <p className="text-black text-right text-sm">Me chamo Ana Alvim, tenho 20 anos, estudo Design na UFMG e atuo como designer e ilustradora em Belo Horizonte <br />
           <br />Desde criança tenho interesse pelas artes, o que me aproximou do desenho e da pintura, assim como da dança e da música </p>
         </div>

      </div>
    </div>
  );
};

export default SobreMim;
