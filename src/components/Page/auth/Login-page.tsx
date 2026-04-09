import React, { useState } from 'react'
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { toast } from 'sonner';
import { MenuList } from '../../../data/data';

export default function LoginPage() {
      const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const navigate =useNavigate() ;

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("Connexion-info", JSON.stringify({ email, password }));
    toast.success("Connexion reussie");
    navigate("/dashboard");
  };

  

   const handleLogin = () => {
  setIsLoggedIn(true);
};

  return (
    <div className=' space-y-6'> 
        <div className='space-y-6'>
            <h1 className='text-5xl text-gray-600 font-bold flex items-center gap-3'>Welcome to Shop<FaCartShopping /></h1>
            <p>Login to your account to continue shopping</p>
        </div>  
        <form
        onSubmit={handleSubmit}
        className="space-y-3"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>

          <input
            className="border-2 border-black rounded-xl px-4 py-2"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="test@gamil.com"
            id="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <div className="relative border-2 border-black rounded-xl ">
            <input
              className="w-full  px-4 py-2"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              id="password"
            />
            {showPassword ? (
              <LuEye className="absolute translate-1/2 top-0 right-5 cursor-pointer" onClick={()=> setshowPassword(false)}/>
            ) : (
              <LuEyeClosed className="absolute translate-1/2 top-0 right-5 cursor-pointer" onClick={()=> setshowPassword(true)}/>
            )}
          </div>
        </div>
        <div className='flex justify-between'>
        <p className='text-gray-500'>No account  <Link to="/auth/register" className='underline'>Sign up</Link></p>
       
         <button
          className="bg-gray-600 text-white cursor-pointer hover:bg-white hover:text-black hover:border-2 rounded-xl px-4 py-2"
          onClick={handleLogin}
          type="submit"
        >
          Login
        </button>
        
      </div>
      </form>
    </div>
  )
}
