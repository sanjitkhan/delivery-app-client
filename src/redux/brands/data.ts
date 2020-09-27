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
  id: string;
  image: string;
  name: string;
  numItems: number;
  isFavourited: boolean;
}

export const initialBrandsState: BrandsState = {
  brands: [
    {
      id: 'kwalitywalls',
      name: 'Kwality Walls',
      image: kwalitywallsImg,
      numItems: 3,
      isFavourited: false
    },
    {
      id: 'godrej',
      name: 'Godrej',
      image: godrejImg,
      numItems: 8,
      isFavourited: true
    },
    {
      id: 'mccain',
      name: 'McCain',
      image: mccainImg,
      numItems: 5,
      isFavourited: false
    },
    {
      id: 'britannia',
      name: 'Britannia',
      image: britanniaImg,
      numItems: 7,
      isFavourited: false
    }
  ]
}