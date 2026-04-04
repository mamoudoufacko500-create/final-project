import { Link, NavLink } from "react-router-dom";
import { ListProduct } from "../../data/data";
import ProductCard from "../../elements/Product-card";
import type { SubMenuType } from "../../data/type";
import { LuChevronDown } from "react-icons/lu";

export const SubMenu: SubMenuType[] = [
  { link: "", name: "Tri par défaut" },
  { link: "", name: "Trier par popularité" },
  { link: "", name: "Trier par note moyenne" },
  { link: "", name: "Trier par derniéres" },
  { link: "", name: "Trier par prix: du bas au haut" },
  { link: "", name: "Trier par prix: de haut à bas" },
];
export default function MenPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 py-20">
      <div className="flex gap-1 items-center">
        <Link to="/">Accueil</Link>
        <h1>/ Homme</h1>
      </div>
      <h1 className="text-6xl font-bold">Homme</h1>
      <div className="flex justify-between">
        <h1>Affichage des 5 résultats</h1>
        <div className="group relative">
          <span className="flex gap-2 items-center">
            <button>Tri par défaut</button>
            {SubMenu && <LuChevronDown />}
          </span>
          {SubMenu && (
            <div className="hidden p-4 group-hover:flex flex-col absolute bg-white/50 border border-white/30 rounded-xl gap-3 top-5 left-0 w-64 ">
              {SubMenu.map((SubMenu) => (
                <NavLink className="hover:bg-white px-4 py-1 " to={SubMenu.link}>
                  {SubMenu.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 ">
        {ListProduct.filter((item)=> item.sex === "Men").map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
