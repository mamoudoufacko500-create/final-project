import React, { useState } from 'react'
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

   const section = hero[index]; 
  return (
    <div >
        <section className="bg-rose-300 h-screen flex items-center">
         <button className="bg-black text-white rounded-full px-4 py-2 cursor-pointer">< LuStepBack onClick={handleClick} /></button>
                  
                    <div className="max-w-6xl mx-auto flex justify-between items-center ">
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
                  <div className="bg-white rounded-full mt-7">
                  <img src={section.image} alt="" className='rounded-full'/>  
                  </div>
                   </div>
        
         <button className="bg-black text-white rounded-full px-4 py-2 cursor-pointer"><LuStepForward onClick={handleClicks} /></button>       
              </section>
    </div>
  )
}
