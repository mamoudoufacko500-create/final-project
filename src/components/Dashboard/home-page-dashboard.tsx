import React, { useState } from 'react'
import LoginPage from '../Page/auth/Login-page';
import { Link, NavLink } from 'react-router-dom';
import { board } from '../../data/data';
import { FaUser } from "react-icons/fa";
import { FaCube } from "react-icons/fa6";

export default function HomePageDashboard() {
  //afficher dash
  return (
    <div>
      <div className='flex justify-between py-3'>
      <div>

      </div>
    
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
