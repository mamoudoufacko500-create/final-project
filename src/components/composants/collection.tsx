import React from 'react'
import UserButton from '../../elements/button'

export default function Collection() {
  return (
    <div>
        <section className="py-20">
                <div className="mx-auto max-w-6xl grid grid-cols-2 relative gap-10 items-center">
                  <div className="bg-rose-300 absolute h-full top-7  w-[57%]"></div>
                  <div className="relative">
                    <img
                      src="/collection-03.jpg"
                      alt=""
                      className="relative bottom-6 left-5  object-cover "
                    />
                  </div>
                  <div className="space-y-5 relative">
                    <h3 className="text-sm text-gray-500">Femmes</h3>
                    <h1 className="text-4xl font-bold">Collection Printemps-Été</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
                      tempor, congue justo at, orci. Aliquam venenatis dui lectus, eu
                      convallis turpis convallis et. Sensible.
                    </p>
                    <UserButton text="Voir la collection compléte" />
                  </div>
                </div>
              </section>
    </div>
  )
}
