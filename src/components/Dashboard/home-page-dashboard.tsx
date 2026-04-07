import React, { useState } from 'react'
import LoginPage from '../Page/auth/Login-page';
import { Link, NavLink } from 'react-router-dom';
import { board } from '../../data/data';
import { FaUser } from "react-icons/fa";
import { FaCube } from "react-icons/fa6";

export default function HomePageDashboard() {
  
  return (
    <div>
      <div className='flex justify-between py-3'>
      <div>

      </div>
     <nav className='flex gap-9 py-5 border-b'>
      <Link to="/bashbord" className='bg-black p-2 rounded-xl text-white'>Tableau de bord</Link>
      {board.map((item)=>(
        <NavLink to={item.link} className="hover:bg-gray-400 p-2 rounded-xl">
          {item.name}
        </NavLink>
      ))}
     </nav>
      </div>
      
      <div className='flex justify-center gap-10 py-10'>
        <div className='shadow-md rounded-xl shadow-black p-10 space-x-4'>
         <h1 className='text-4xl font-bold'> Utisateurs</h1>
        <span ><FaUser className='mt-4 text-2xl' /></span> 
         <p className='text-7xl font-bold text-green-500'>3</p>
        </div>
        <div className='shadow-md shadow-black rounded-xl p-10 space-x-4'>
         <h1  className='text-4xl font-bold'>Produits</h1> 
        <span> <FaCube className='mt-4 text-2xl' /></span> 
         <p className='text-7xl font-bold text-green-500'>42</p>
        </div>
      </div>
      
    </div>
  )
}
