import React from 'react'
import { ListProduct } from '../data/data'
import type {ListProductType } from '../data/type'

export default function ProductCard({id, name, image, prix, sex} : ListProductType) {
  return (
    <div className='bg-black/10 rounded-xl space-y-2 '>
     <img src={image} alt={name} className='w-70 rounded-xl  '/>
     <div className='p-5'>
      <p className='font-semibold text-gray-500'>{sex}</p>
      <h2 className='font-bold text-xl'>{name}</h2>
      <p className='font-bold'>{prix} $</p>
      <div className='flex gap-3 mt-4'>
        <div className='size-7 bg-black border-2 border-black'></div>
        <div className='size-7 bg-pink-100 border-2 border'></div>
        <div className='size-7 bg-gray-200 border-2 border'></div>
      </div>
      <div className='flex gap-3 mt-4'>
        <div className='size-7  border-2 border text-center'>XS</div>
        <div className='size-7 border-2 border text-center'>S</div>
        <div className='size-7  border-2 border text-center'>M</div>
        <div className='size-7  border-2 border text-center'>L</div>
        <div className='size-7  border-2 border text-center'>XL</div>
      </div>
     </div>
    
    </div>
  )
}
