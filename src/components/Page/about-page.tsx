import React from "react";
import UserButton from "../../elements/button";

export default function AboutPage() {
  return (
    <div className=" py-25 flex flex-col items-center text-center">
      <div className="flex flex-col items-center text-center  gap-8 mb-20">
      <h1 className="text-7xl font-bold">About</h1>
      <div className="bg-black h-1 w-25"></div>
      <p className="font-bold mx-auto max-w-2xl">
        Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac
        massa orci. Suspendisse vulputate semper nunc eget rhoncus.
      </p>
      <p className="text-sm text-gray-500 mx-auto max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante
        vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
        Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem,
        interdum tincidunt libero. Nulla vel quam lobortis, varius est
        scelerisque, dapibus nisl.
      </p>
      </div>
      <div className="relative bg-[url('/full.jpg')] bg-cover object-cover h-screen w-full">
        <div className="absolue inset-0 bg-black/50 h-screen">
          <div className="relative mx-auto max-w-6xl flex items-center h-screen gap-10 justify-center text-white ">
           <div className="flex flex-col text-start gap-10 w-1/2">
            <h1>La mission</h1>
            <p className="font-bold text-5xl mx-auto max-w-2xl">Notre priorité absolue est d'offrir la meilleur qualité.</p>
            <div className="bg-white h-1 w-25"></div>
           </div>
            <div className="flex flex-col text-start gap-15 w-1/2">
              <p className="font-bold text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante
        vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
        Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem,
        interdum tincidunt libero. Nulla vel quam lobortis, varius est
        scelerisque, dapibus nisl.</p>
        <p className="font-bold text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
              tempor, congue justo at, orci. Aliquam venenatis dui lectus, eu
              convallis turpis convallis et. Sensible.</p>
            </div>
          </div>
        </div>
      </div>
      <div  className="flex flex-col items-center text-center my-20 gap-8">
        <h1 className="text-5xl font-bold">How it started</h1>
      <div className="bg-black h-1 w-25"></div>
      <p className="text-sm text-gray-500 mx-auto max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      </div>
        <div className=" h-screen ">
        <div className=" flex ">
          <div className="bg-pink-200 flex flex-col justify-center h-screen space-y-6 p-25 w-1/2">
           <h1 className="text-3xl font-bold">
              Vel mauris molestie dignissim
            </h1>
            <p className="font-bold">
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
              ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
            </p>
            <p className="text-gray-500">
              Praesent vel faucibus ligula. Sed sit amet ipsum eget velit
              aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar
              sit amet vitae augue. Phasellus nec ultricies arcu. Quisque
              efficitur tellus sit amet bibendum molestie. Duis id egestas odio.
              Phasellus lacinia ex quis faucibus tempor. Sed feugia.
            </p>
          </div>
          <div className="w-1/2 ">
            <img src="/full.jpg" alt="" className="h-screen object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
