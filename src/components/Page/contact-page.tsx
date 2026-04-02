import React from 'react'

export default function ContactPage() {
  return (
        <div className=" mb-50 flex flex-col items-center text-center ">
             <div  className="flex flex-col items-center text-center my-20 gap-8">
        <h1 className="text-7xl font-bold">Contact</h1>
      <div className="bg-black h-1 w-15"></div>
      <p className="text-sm text-gray-500 mx-auto max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      </div>
      <div className='flex justify-center items-center mt-20'>
        <div className='bg-pink-200 flex flex-col h-screen justify-center items-start space-y-5 p-10 w-[57%] absolute left-10'>
            <h1 className='text-2xl font-bold'>Entrer en contact</h1>
            <p className='text-gray-600 text-start max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro molestias rerum.  provident mollitia reiciendis </p>
            <div className='space-y-4 text-sm text-start'>
                <p >123 Cinquiéme Avenue, New York, NY 10160</p>
                <p>contact@info.com</p>
                <p>+1 334 7565 9787</p>
            </div>
        </div>
        <div>
            <form className='space-y-4 bg-white p-20 rigth-6 h-[50%] relative left-80'>
                <div className='flex gap-4'>
                    <input type="text" placeholder='Prénom' className='border p-3 w-full'/>
                      <input type="text" placeholder='Nom de famille' className='border p-3 w-full'/>
                </div>
                <input type="email" placeholder='Votre adresse e-mail *' className='border p-3 w-full'/>
                <textarea placeholder='Message' className='border p-3 w-full h-32'></textarea>
                <button className='bg-black text-white px-6 py-3'>Envoyer</button>
            </form>
        </div>
      </div>
        </div>
  )
}
