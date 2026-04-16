import React, { useEffect, useState } from 'react'
import { FaCube } from "react-icons/fa6";

export default function HomePageDashboard() {
  //afficher dash
    const [produits, setProduits] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem("produits")
    if (saved) {
      setProduits(JSON.parse(saved))
    }
  }, [])
  return (
    <div>
      
      
      <div className='flex justify-center gap-10 py-10'>
        
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-64 hover:scale-105 transition">
         <h1  className='text-4xl font-bold'>PRODUITS</h1> 
        <span> <FaCube className='mt-4 text-2xl' /></span> 
         <p className='text-5xl font-bold text-green-500'>{produits.length}</p>
        </div>
      </div>
      
    </div>
  )
}
