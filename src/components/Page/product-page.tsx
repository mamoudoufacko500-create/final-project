import React from "react";
import { useParams } from "react-router-dom";
import { ListProduct } from "../../data/data";
import { IoMdAdd } from "react-icons/io";
import ProductCard from "../../elements/Product-card";

export default function ProductPage() {
  const { id } = useParams();

  const product = ListProduct.find((service) => service.id === Number(id));

  return (
    <div className="max-w-6xl mx-auto py-20 space-y-20">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-10">
          <img src={product?.image} alt={product?.name} />
          <div className="flex flex-wrap gap-10">
            <img
              src="/product-01-d.jpg"
              alt=""
              className="w-65 object-cover "
            />
            <img
              src="/product-001-b.jpg"
              alt=""
              className="w-65 object-cover "
            />
            <img
              src="/product-01-c.jpg"
              alt=""
              className="w-65 object-cover "
            />
          </div>
        </div>
        <div className="space-y-8">
          <div className="border-b pb-5">
            <p className="font-semibold text-gray-500">{product?.sex}</p>
            <h2 className="font-bold text-xl">{product?.name}</h2>
            <p className="font-bold">{product?.prix} $</p>
            <div className="flex gap-3 mt-4">
              <div className="size-7 bg-black border-2 border-black"></div>
              <div className="size-7 bg-pink-100 border-2 "></div>
              <div className="size-7 bg-gray-200 border-2 "></div>
            </div>
            <div className="flex gap-3 mt-4 ">
              <div className="size-7  border-2  text-center">XS</div>
              <div className="size-7 border-2  text-center">S</div>
              <div className="size-7  border-2  text-center">M</div>
              <div className="size-7  border-2  text-center">L</div>
              <div className="size-7  border-2  text-center">XL</div>
            </div>
          </div>
          <div className="flex items-center gap-3 border-b pb-5">
            <div className="flex items-center border">
              <button className="px-3 py-1 text-lg border">-</button>
              <span className="px-4  ">1</span>
              <button className="px-3 py-1 text-lg border">+</button>
            </div>
            <button className="bg-gray-500 text-white px-4 py-2">
              Ajouter au panier
            </button>
          </div>
          <div className="text-sm text-gray-500 flex items-center gap-3 border-b pb-5">
            <p>SKU : N/A</p>
            <p>
              Catégorie : <span className="font-medium text-black">Femmes</span>
            </p>
          </div>
          <div className=" space-y-3">
            <div className="relative group">
              <div className="flex justify-between border-b pb-5">
                <button className="text-lg font-semibold">Description</button>
                <span>
                  <IoMdAdd className="font-bold" />
                </span>
              </div>
              <div className="hidden p-4 group-hover:flex flex-col  ">
                <div className="border-b pb-5 space-y-8">
                  <p className="font-medium">A propos du produit</p>
                  <p>
                    Nos T-shirt sont Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Optio voluptatum architecto fugit dolores
                    placeat saepe, porro sint ducimus hic suscipit odit,
                    consequuntur nobis reprehenderit accusantium? Magnam
                    nesciunt vero facilis id.
                  </p>
                  <ul className="space-y-1">
                    <li>100 % coton</li>
                    <li> 260 gsm</li>
                    <li>Tissu respirant</li>
                  </ul>
                </div>
                <div className="border-b pb-5 space-y-8">
                  <p className="font-medium">Taille et Coupe</p>
                  <ul className="space-y-1">
                    <li>Le mannequin porte une taille M et mesure 1,85 m.</li>
                    <li>
                      Ajustement standard pour une sensation détendue et facile
                    </li>
                  </ul>
                </div>
                <div className="border-b pb-5 space-y-8">
                  <p className="font-medium">Livraison et retours gratuits</p>
                  <p>
                    Livraison standard gratuite sur les commandes supérieures à
                    60 $.
                  </p>
                  <ul className="space-y-1">
                    <li>
                      Vous pouvez retourner votre commande pour n’importe quelle
                      raison, gratuitement, dans les 30 jours
                    </li>
                    <li>
                      Nous proposons également une étiquette d’expédition
                      gratuite
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="group relative">
              <div className="flex justify-between border-b pb-5">
                <button className="text-lg font-semibold">
                  Informations complémentaires
                </button>
                <span>
                  <IoMdAdd className="font-bold" />
                </span>
              </div>
              <div className="hidden p-4 group-hover:block border-b pb-5 ">
                <table className="border">
                  <tr>
                    <th>Couleur</th>
                    <th>Taille</th>
                  </tr>
                  <tr>
                    <th>Noir, Orange, Blanc</th>
                    <th>XS, S, M, L, XL</th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div className="group relative">
              <div className="flex justify-between border-b pb-5">
                <button className="text-lg font-semibold">Avis (0)</button>{" "}
                <span>
                  <IoMdAdd className="font-bold" />
                </span>
              </div>
              <div className="hidden p-4 group-hover:block">
                <p className="text-gray-500">Il n’y a pas encore d’avis.</p>
                <div className="border p-5 mt-2">
                  <h1 className="text-xl mb-2">
                    Soyez le premier à critiquer « T-Shirt Name 9 »
                  </h1>
                  <p className=" mb-2">
                    Votre adresse e-mail ne sera pas publiée. Les champs
                    obligatoires sont marqués *
                  </p>
                  <form className="space-y-4 ">
                    <div className="flex flex-col gap-4">
                      <div>
                        <label htmlFor="">Votre avis *</label>
                        <textarea
                          placeholder="Message"
                          className="border p-3 w-full h-32"
                        ></textarea>
                      </div>
                      <div className="flex gap-4">
                        <div>
                          <label htmlFor="">Nom *</label>
                          <input
                            type="text"
                            placeholder="Nom"
                            className="border p-3 w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Email *</label>
                          <input
                            type="email"
                            placeholder="Votre adresse e-mail *"
                            className="border p-3 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="border-gray-600" />
                        <label htmlFor="" className="text-sm  text-gray-600">Enregistrez mon nom, mon adresse e-mail et mon site web dans ce navigateur pour mon prochain commentaire</label>
                      </div>
                    </div>
                    <button className="bg-black text-white px-6 py-3">
                      Envoyer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <h1 className="text-5xl font-bold">Produits associés</h1>
        <div className="grid grid-cols-4 gap-6 ">
          {ListProduct.map((card) => (
            <ProductCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
