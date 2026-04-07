import { useState } from "react";



export default function CreatePage() {
  

  return (
    <div className="max-w-4xl mx-auto p-20 flex justify-center items-center">
 <form className="grid grid-cols-2 gap-4 mb-8">
        <input
          name="name"
          placeholder="Nom"
          className="border p-2 rounded"
          required
        />

        <input
          name="color"
          placeholder="Couleur"
          className="border p-2 rounded"
          required
        />

        <select
          name="size"
          className="border p-2 rounded"
          required
        >
          <option value="">Taille</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>

        <select
          name="gender"
          className="border p-2 rounded"
          required
        >
          <option value="">Sexe</option>
          <option>Homme</option>
          <option>Femme</option>
          <option>Unisexe</option>
        </select>

        <input type="file" className="col-span-2" />


        <button className="col-span-2 bg-black text-white p-2 rounded">
          Ajouter
        </button>
      </form>
    </div>
  );
}
