import React from "react";
import { ListProduct } from "../data/data";
import type { ListProductType } from "../data/type";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  image,
  prix,
  sex,
}: ListProductType) {
  return (
    <div className="bg-black/10 rounded-xl space-y-2 ">
      <Link to={`/shop/${id}`}>
      <img src={image} alt={name} className="w-70 rounded-xl  " />
      </Link>
      <div className="p-5">
        <p className="font-semibold text-gray-500">{sex}</p>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="font-bold">{prix} $</p>
        <div className="flex gap-3 mt-4">
          <div className="size-7 bg-black border-2 border-black"></div>
          <div className="size-7 bg-pink-100 border-2 "></div>
          <div className="size-7 bg-gray-200 border-2 "></div>
        </div>
        <div className="flex gap-3 mt-4">
          <div className="size-7  border-2  text-center">XS</div>
          <div className="size-7 border-2  text-center">S</div>
          <div className="size-7  border-2  text-center">M</div>
          <div className="size-7  border-2  text-center">L</div>
          <div className="size-7  border-2  text-center">XL</div>
        </div>
      </div>
    </div>
  );
}
