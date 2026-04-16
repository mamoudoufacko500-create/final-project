import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { hero } from '../../data/data'
import { LuStepForward } from "react-icons/lu";
import { LuStepBack } from "react-icons/lu";

export default function Hero() {

  const [index, setIndex] = useState(0);

    const handleClick = ()  => {
      if(index >= hero.length -1) {
        return;
      }
    const newIndex = index + 1;
    setIndex(newIndex); 
  }

   const handleClicks = ()  => {
    const newIndex = index - 1  < 0 ? 0 :index - 1;
    setIndex(newIndex); 
  }

useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex >= hero.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

   const section = hero[index]; 
  return (
    <div >
        <section className="bg-rose-300 h-screen flex items-center">
         {/* <button className="bg-black text-white rounded-full px-4 py-2 cursor-pointer">< LuStepBack onClick={handleClick} /></button> */}
                  
                    <div className="max-w-6xl mx-auto grid grid-cols-2 items-center ">
              <div className="space-y-9">
                    <h1 className="text-xl text-gray-500">{section.sex}</h1>
                    <p className="font-bold text-7xl">
                      {section.description}
                    </p>
                    <Link to="" className="bg-black py-3 px-5">
                      <button className="text-white cursor-pointer">
                        Shop Collection
                      </button>
                    </Link>
                  </div>
                  <div className="relative flex justify-center pt-5">
          {/* CIRCLE BACKGROUND */}
          <div className="absolute w-100 right-0 top-0 h-100  bg-white/40 rounded-full"></div>
          <div className="absolute w-64 left-0 bottom-0 h-64 bg-white/40 rounded-full"></div>
          {/* IMAGE */}
          <img
            src={section.image}
            alt="model"
            className="relative h-[600px]  object-cover "
          />
        </div>
                   </div>
        
         {/* <button className="bg-black text-white rounded-full px-4 py-2 cursor-pointer"><LuStepForward onClick={handleClicks} /></button>        */}
              </section>
    </div>
  )
}
