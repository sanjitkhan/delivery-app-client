import frozenFoodImg from "../../assets/images/category_frozenfoods.jpg"
import iceCreamImg from "../../assets/images/category_icecream.jpg"
import confectioneryImg from "../../assets/images/category_confectionery.jpg"
import groceriesImg from "../../assets/images/category_groceries.jpg"

export enum Category {
  ICE_CREAM = 'Ice Cream',
  GROCERY = 'Grocery',
  CONFECTIONERY = 'Confectionery',
  FROZEN_FOOD = 'Frozen Food'
}

export enum TextPosition {
  RIGHT = 'right',
  LEFT = 'left'
}

export enum BackgroundTheme {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface CategoriesState {
  categories: CategoryState[];
}

export interface CategoryState {
  id: string;
  image: string;
  name: string;
  textPosition: TextPosition;
  backgroundTheme: BackgroundTheme;
}

export const initialCategoriesState: CategoriesState = {
  categories: [
    {
      id: 'icecream',
      name: 'Ice Cream',
      image: iceCreamImg,
      textPosition: TextPosition.RIGHT,
      backgroundTheme: BackgroundTheme.DARK
    },
    {
      id: 'groceries',
      name: 'Groceries',
      image: groceriesImg,
      textPosition: TextPosition.LEFT,
      backgroundTheme: BackgroundTheme.LIGHT
    },
    {
      id: 'frozen-foods',
      name: 'Frozen Foods',
      image: frozenFoodImg,
      textPosition: TextPosition.RIGHT,
      backgroundTheme: BackgroundTheme.DARK
    },
    {
      id: 'confectioneries',
      name: 'Confectioneries',
      image: confectioneryImg,
      textPosition: TextPosition.LEFT,
      backgroundTheme: BackgroundTheme.LIGHT
    }
  ]
}