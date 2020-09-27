import kwalitywallsImg from "../../assets/images/brand_kwalitywalls.png"
import britanniaImg from "../../assets/images/brand_britannia.png"
import godrejImg from "../../assets/images/brand_godrej.png"
import mccainImg from "../../assets/images/brand_mccain.png"

export enum Brand {
  MC_CAIN = 'McCain',
  BRITANNIA = 'Britannia',
  KWALITY_WALLS = 'Kwality walls',
  GODREJ = 'Godrej'
}

export interface BrandsState {
  brands: BrandState[];
}

export interface BrandState {
  id: Brand;
  image: string;
  name: string;
  numItems: number;
  isFavourited: boolean;
}

export const initialBrandsState: BrandsState = {
  brands: [
    {
      id: Brand.KWALITY_WALLS,
      name: 'Kwality Walls',
      image: kwalitywallsImg,
      numItems: 3,
      isFavourited: false
    },
    {
      id: Brand.GODREJ,
      name: 'Godrej',
      image: godrejImg,
      numItems: 8,
      isFavourited: true
    },
    {
      id: Brand.MC_CAIN,
      name: 'McCain',
      image: mccainImg,
      numItems: 5,
      isFavourited: false
    },
    {
      id: Brand.BRITANNIA,
      name: 'Britannia',
      image: britanniaImg,
      numItems: 7,
      isFavourited: false
    }
  ]
}