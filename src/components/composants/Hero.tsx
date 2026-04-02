import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div>
        <section className="bg-rose-300 h-screen">
                <div className="max-w-6xl mx-auto flex justify-between items-center ">
                  <div className="space-y-9">
                    <h1 className="text-xl text-gray-500">Women</h1>
                    <p className="font-bold text-7xl">
                      Slick. Modern. <br /> Awesome.
                    </p>
                    <Link to="" className="bg-black py-3 px-5">
                      <button className="text-white cursor-pointer">
                        Shop Collection
                      </button>
                    </Link>
                  </div>
                  <div className="bg-white rounded-full mt-7">
                    <img src="/hero.png" alt="" className="w-150 h-150 rounded-full" />
                  </div>
                </div>
              </section>
    </div>
  )
}
