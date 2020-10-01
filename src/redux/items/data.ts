import kwalitywallsImg from "../../assets/images/brand_kwalitywalls.png"
import britanniaImg from "../../assets/images/brand_britannia.png"
import godrejImg from "../../assets/images/brand_godrej.png"
import mccainImg from "../../assets/images/brand_mccain.png"
import { Brand } from "../brands/data";
import { Category } from "../categories/data";

export interface ItemsState {
  items: ItemState[];
}

export interface ItemState {
  id: string;
  image: string;
  name: string;
  brand: Brand;
  categories: Category[]
  stock: number;
  price: number;
  isFavourited: boolean;
}

export const initialItemsState: ItemsState = {
  items: [
    {
      id: 'mccain-item1',
      image: mccainImg,
      name: 'Item 1',
      brand: Brand.MC_CAIN,
      categories: [Category.FROZEN_FOOD],
      stock: 5,
      price: 100.00,
      isFavourited: true
    },
    {
      id: 'mccain-item2',
      image: mccainImg,
      name: 'Item 2',
      brand: Brand.MC_CAIN,
      categories: [Category.FROZEN_FOOD],
      stock: 15,
      price: 150.00,
      isFavourited: false
    },
    {
      id: 'godrej-item1',
      image: godrejImg,
      name: 'Item 3',
      brand: Brand.GODREJ,
      categories: [Category.FROZEN_FOOD],
      stock: 3,
      price: 200.00,
      isFavourited: false
    },
    {
      id: 'godrej-item2',
      image: godrejImg,
      name: 'Item 3',
      brand: Brand.GODREJ,
      categories: [Category.FROZEN_FOOD],
      stock: 32,
      price: 250.00,
      isFavourited: false
    },
    {
      id: 'godrej-item3',
      image: godrejImg,
      name: 'Item 5',
      brand: Brand.GODREJ,
      categories: [Category.GROCERY],
      stock: 32,
      price: 250.00,
      isFavourited: false
    },
    {
      id: 'kwalitywalls-item1',
      image: kwalitywallsImg,
      name: 'Item 6',
      brand: Brand.KWALITY_WALLS,
      categories: [Category.ICE_CREAM],
      stock: 12,
      price: 50.00,
      isFavourited: true
    },
    {
      id: 'kwalitywalls-item2',
      image: kwalitywallsImg,
      name: 'Item 7',
      brand: Brand.KWALITY_WALLS,
      categories: [Category.ICE_CREAM],
      stock: 31,
      price: 80.00,
      isFavourited: false
    },
    {
      id: 'britannia-item1',
      image: britanniaImg,
      name: 'Item 8',
      brand: Brand.BRITANNIA,
      categories: [Category.CONFECTIONERY],
      stock: 97,
      price: 30.00,
      isFavourited: false
    },
    {
      id: 'britannia-item2',
      image: britanniaImg,
      name: 'Item 9',
      brand: Brand.BRITANNIA,
      categories: [Category.CONFECTIONERY],
      stock: 31,
      price: 20.00,
      isFavourited: true
    }
  ]
}