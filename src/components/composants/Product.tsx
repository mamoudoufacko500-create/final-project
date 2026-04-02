import React from 'react'
import UserButton from '../../elements/button'
import { ListProduct } from '../../data/data'
import ProductCard from '../../elements/Product-card'

export default function Product() {
  return (
    <div>
              <section className="mx-auto max-w-6xl flex flex-col items-center py-9 space-y-5">
                <h3 className="text-sm font-semibold text-gray-500">
                  Collection d'été
                </h3>
                <h1 className="text-xl font-bold">T-shirts populaires</h1>
                <div className="grid grid-cols-4 gap-6 ">
                  {ListProduct.map((card) => (
                    <ProductCard key={card.id} {...card} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-5 py-9">
                  <div className="space-y-2">
                    <img
                      src="/collection-02.jpg"
                      alt=""
                      className="object-cover h-[70%]"
                    />
                    <div className="flex flex-col items-center space-y-2">
                      <h1 className="text-xl text-gray-500">Homme</h1>
                      <p className="text-5xl font-bold">
                        La collection de base - Idéale chaque jour
                      </p>
                      <UserButton text="Achetez dès maintenant" />
                    </div>
                  </div>
                  <div>
                    <img
                      src="/collection-02.jpg"
                      alt=""
                      className="object-cover h-screen"
                    />
                  </div>
                </div>
              </section>
              <section className="relative bg-[url('/full.jpg')] bg-cover object-cover bg-fixed h-screen">
                <div className="absolue inset-0 bg-black/50 h-screen">
                  <div className="relative flex flex-col items-center justify-center h-screen text-white space-y-5">
                    <h1 className="text-sm font-semibold">Nouvelle collection</h1>
                    <p className="text-5xl font-bold">Sois différent à ta manière !</p>
                    <p className="text-2xl font-bold">Trouvez votre style unique.</p>
                    <UserButton text="Collection de la boutique" />
                  </div>
                </div>
              </section>
    </div>
  )
}
