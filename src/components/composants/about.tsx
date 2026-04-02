import React from 'react'
import { Link } from 'react-router-dom'
import { ListProduct } from '../../data/data'
import ProductCard from '../../elements/Product-card'

export default function About() {
  return (
    <div>
              <section className="mx-auto max-w-6xl flex flex-col items-center py-9 space-y-5">
                <h3 className="text-sm text-gray-500">Collection d’été</h3>
                <h1 className="text-5xl font-bold">On Sale T-Shirts</h1>
                <div className="grid grid-cols-4 gap-6 ">
                  {ListProduct.map((card) => (
                    <ProductCard key={card.id} {...card} />
                  ))}
                </div>
              </section>
              <section className="mx-auto max-w-6xl ">
                <div className="flex flex-col gap-5 items-center justify-center">
                  <h1 className="text-5xl font-bold">Reviews</h1>
                  <p className="font-bold text-center underline">
                    “ Very good quality T-shirts and lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua quis ipsum! ”
                  </p>
                  <div className="text-center">
                    <span>⭐⭐⭐⭐⭐</span>
                    <h3 className="text-sm text-gray-500">Jane Oliver</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 py-9 gap-6">
                  <div>
                    <img src="/cat-men.jpg" alt="" className="" />
                    <Link to="" className="relative bottom-20 mx-7">
                      <button className=" bg-white/50 hover:bg-white text-center cursor-pointer px-50 mx-4">
                        <h4 className="font-bold">MEN</h4>
                        <p className="text-sm text-gray-500">5 PRODUCTS</p>
                      </button>
                    </Link>
                  </div>
                  <div>
                    <img src="/cat-women.jpg" alt="" />
                    <Link to="" className="relative bottom-20 mx-7">
                      <button className=" bg-white/50 hover:bg-white text-center cursor-pointer px-50 mx-4">
                        <h4 className="font-bold">WOMEN</h4>
                        <p className="text-sm text-gray-500">5 PRODUCTS</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
    </div>
  )
}
