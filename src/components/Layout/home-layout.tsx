import React from "react";
import { MenuList } from "../../data/data";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import UserButton from "../../elements/button";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function HomeLayout() {
  return (
    <div>
      <header className="max-w-7xl mx-auto flex justify-between items-center py-5">
        <nav className="flex gap-5">
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
        <div className="flex gap-15 items-center">
          <Link to="">
          <FaSearch />
          </Link>
          <Link to="" className="flex gap-2 items-center font-bold">
           <span>0,00 $</span><FaCartShopping />
          </Link>
          <Link to="/auth/login">
            <button className="cursor-pointer"> LOG IN</button>
          </Link> 
        </div>
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
