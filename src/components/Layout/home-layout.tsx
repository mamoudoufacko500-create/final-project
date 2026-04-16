import React, { useState } from "react";
import { MenuList } from "../../data/data";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaSearch, FaBars, FaTimes  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import UserButton from "../../elements/button";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function HomeLayout() {

    const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div>
      <header className="max-w-7xl mx-auto flex justify-between items-center py-5 ">
        <nav className="hidden md:flex gap-5">
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
        <Link to="/" className="text-2xl font-bold">
          <h1 className="cursor-pointer">
            T-SHIRTS <br />{" "}
            <span className="text-sm text-gray-500 border-t-2 border-gray-500 tracking-[0.9em] md:text-base">
              store
            </span>
          </h1>
        </Link>
        <div className="hidden md:flex gap-15 items-center">
          <Link to="">
          <FaSearch />
          </Link>
          <Link to="" className="flex gap-2 items-center font-bold">
           <span>0,00 $</span><FaCartShopping />
          </Link>
          <Link to="/auth/login">
            <button  className="cursor-pointer hover:font-bold"> LOG IN</button>
          </Link> 
        </div>
         <button
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          
          {MenuList.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.link}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 text-xl font-bold"
                  : "text-black text-xl"
              }
            >
              {menu.name}
            </NavLink>
          ))}

          {/* <Link to="/search" onClick={() => setIsOpen(false)}>
            <FaSearch size={20} />
          </Link>

          <Link to="/cart" className="flex gap-2 items-center font-bold">
            <span>0,00 $</span>
            <FaCartShopping />
          </Link>

          <Link to="/auth/login">
            <button className="cursor-pointer text-lg">
              LOG IN
            </button>
          </Link> */}

        </div>
      )}
      </header>
      <div>
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
