import React, { useState } from "react";
import type { MenListType } from "../../data/type";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import UserButton from "../../elements/button";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { board, MenList, MenuList } from "../../data/data";

export default function DashboardLayout() {
 
  return (
    <div>
       <nav className='flex gap-9 py-5 border-b'>
            <Link to="/bashbord" className='bg-black p-2 rounded-xl text-white'>Tableau de bord</Link>
            {board.map((item)=>(
              <NavLink to={item.link} className="hover:bg-gray-400 p-2 rounded-xl">
                {item.name}
              </NavLink>
            ))}
           </nav>
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
      <section className="bg-pink-200  h-100 py-15">
        <div className="text-center space-y-5">
          <h1 className="font-bold text-xl">
            Subscribe to get offers in your inbox
          </h1>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod
            condimentum
          </p>
          <form action="" className="space-x-5">
            <input
              type="text"
              placeholder="Your Email Address *"
              className="border px-7 py-3 rounded-sm"
            />
            <UserButton text="Subscrite" className="py-3" />
          </form>
        </div>
        <div className="mt-8 space-y-5">
          <nav className="justify-center flex gap-5">
            {MenuList.map((menu) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-600" : "text-black"
                }
                to={menu.link}
              >
                {menu.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex justify-center items-center gap-4">
            <Link to="" className="p-2 bg-white ">
              <FaFacebookF />
            </Link>
            <Link to="" className="p-2 bg-white ">
              <FiTwitter />
            </Link>
            <Link to="" className="p-2 bg-white ">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
      <footer className="text-center bg-black text-white py-10 ">
        Copyright &copy; 2026 Boutique de T-shirts | Magasin de T-shirts
        propulsé
      </footer>
    </div>
  );
}
