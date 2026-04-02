import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SubMenu } from './men-page'
import { ListProduct } from '../../data/data'
import ProductCard from '../../elements/Product-card'
import { LuChevronDown } from "react-icons/lu";

export default function ShopPage() {
  return (
    <div>
          <div className="mx-auto max-w-6xl space-y-10 py-20">
      <div className="flex gap-1 items-center">
        <Link to="/">Accueil</Link>
        <h1>/ Shop</h1>
      </div>
      <h1 className="text-6xl font-bold">Shop</h1>
      <div className="flex justify-between">
        <h1>Affichage des 10 résultats</h1>
         <div className="group relative">
          <span className="flex gap-2 items-center">
            <button >Tri par défaut</button>
            {SubMenu && <LuChevronDown />}
          </span>
          {SubMenu && (
            <div className="hidden p-4 group-hover:flex flex-col absolute bg-white/50 border border-white/30 rounded-xl gap-3 top-5 left-0 w-64 ">
              {SubMenu.map((SubMenu) => (
                <NavLink
                  className="hover:bg-gray-500"
                  to={SubMenu.link}
                >
                  {SubMenu.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 ">
        {ListProduct.map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>
    </div>
    </div>
  )
}
