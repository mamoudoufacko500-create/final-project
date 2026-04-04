import React, { useState } from 'react'
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

export default function RegisterPage() {
      const [email, setEmail] = useState("");
       const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("Connexion-info", JSON.stringify({ email, password }));
    // toast.success("Connexion reussie");
  };
  return (
    <div className=' space-y-6'> 
        <div className='space-y-6'>
            <h1 className='text-5xl text-gray-600 font-bold flex items-center gap-3'>Welcome to Shop<FaCartShopping /></h1>
            <p>Login to your account to continue shopping</p>
        </div>  
        <form
        onSubmit={handleSubmit}
        className=" space-y-3"
      >
        <div className="flex  gap-2">
           <div>
             <label htmlFor="name">Nom</label>
          <input
            className="border-2 border-black rounded-xl px-4 py-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom"
            id="name"
          />
           </div>
           <div>
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
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <div className="relative border-2 border-black rounded-xl px-4 py-2 ">
            <input
              className=""
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              id="password"
            />
            {showPassword ? (
              <LuEye className="absolute translate-1/2 top-0 right-5 cursor-pointer" onClick={()=> setshowPassword(false)}/>
            ) : (
              <LuEyeClosed className="absolute translate-1/2 top-0 right-5 cursor-pointer" onClick={()=> setshowPassword(true)}/>
            )}
          </div>
        </div>
         <div className="flex items-center gap-3">
                        <input type="checkbox" className="border-gray-600" />
                        <label htmlFor="" className="text-sm  text-gray-600">
Je souhaite recevoir des e-mails concernant des événements, des mises à jour de produits et des annonces d’entreprises.</label>
                      </div>
        <div className='flex justify-between'>
            <button
          className="bg-gray-600 text-white cursor-pointer rounded-xl px-4 py-2"
          type="submit"
        >
          Créer un compte
        </button>
        <p className='text-gray-500'>Vous avez déjà un compte ? <Link to="/auth/login" className='underline'>Connectez-vous</Link></p>
      </div>
      </form>
    </div>
  )
}
