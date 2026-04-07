import type {  boardType, heroType, ListProductType, MenListType, MenuListType } from "./type";

export const MenuList: MenuListType [] = [
    {link:"/shop", name: "BUY T-SHIRTS"},
    {link:"/women", name: "WOMEN"},
    {link:"/men", name: "MEN"},
    {link:"/about", name: "ABOUT"},
    {link:"/contact", name: "CONTACT"},
]

export const MenList: MenListType [] = [
    {link:"/shop", name: "BUY T-SHIRTS"},
    {link:"/women", name: "WOMEN"},
    {link:"/men", name: "MEN"},
    {link:"/about", name: "ABOUT"},
    {link:"/contact", name: "CONTACT"},
   {link:"/dashboard", name: "DASHBOARD"}, 
]

export const ListProduct: ListProductType [] = [
    {id:1,sex:"Women",image:"/product-1.jpg",name:"Nom du t-shirt 1", prix:33},
    {id:2,sex:"Women",image:"/product-2.jpg",name:"Nom du t-shirt 2", prix:31},
    {id:3,sex:"Men",image:"/product-3.jpg",name:"Nom du t-shirt 3", prix:30},
    {id:4,sex:"Men",image:"/product-4.jpg",name:"Nom du t-shirt 4", prix:36},
    {id:5,sex:"Women",image:"/product-01.jpg",name:"Nom du t-shirt 5", prix:40}, 
     {id:6,sex:"Men",image:"/product-05.jpg",name:"Nom du t-shirt 6", prix:36},
     {id:7,sex:"Women",image:"/product-07.jpg",name:"Nom du t-shirt 7", prix:36},
     {id:8,sex:"Men",image:"/product-02.jpg",name:"Nom du t-shirt 8", prix:36},
]

export const hero: heroType [] = [
    {image:"/hero.png",description:"Slick. Modern. Awesome.",sex:"Women"},
    {image:"/hero1.jpg",description:"Bold. Strong. Confident",sex:"Men"},
    {image:"/hero2.jpg",description:"Style for everyone. No limits.",sex:"Unisexe"},
]

export const board: boardType [] = [
     {name:"Créer",link:"/dashboard/create"},
      {name:"Utilisateur",link:"/dashboard/user"},
       {name:"Produit",link:"/dashboard/product"},
]