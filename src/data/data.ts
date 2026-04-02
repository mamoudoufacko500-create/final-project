import type {  ListProductType, MenuListType } from "./type";

export const MenuList: MenuListType [] = [
    {link:"/shop", name: "BUY T-SHIRTS"},
    {link:"/women", name: "WOMEN"},
    {link:"/men", name: "MEN"},
    {link:"/about", name: "ABOUT"},
    {link:"/contact", name: "CONTACT"},
]

export const ListProduct: ListProductType [] = [
    {id:1,sex:"Women",image:"/product-1.jpg",name:"Nom du t-shirt 1", prix:33},
    {id:2,sex:"Women",image:"/product-2.jpg",name:"Nom du t-shirt 2", prix:31},
    {id:3,sex:"Women",image:"/product-3.jpg",name:"Nom du t-shirt 3", prix:30},
    {id:4,sex:"Men",image:"/product-4.jpg",name:"Nom du t-shirt 4", prix:36},
]