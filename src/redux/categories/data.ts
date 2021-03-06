import frozenFoodImg from "../../assets/images/category_frozenfoods.jpg"
import iceCreamImg from "../../assets/images/category_icecream.jpg"
import confectioneryImg from "../../assets/images/category_confectionery.jpg"
import groceriesImg from "../../assets/images/category_groceries.jpg"

export enum Category {
  ICE_CREAM = 'icecream',
  GROCERY = 'grocery',
  CONFECTIONERY = 'confectionery',
  FROZEN_FOOD = 'frozenfood'
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
  id: Category;
  image: string;
  name: string;
  numItems: number;
  textPosition: TextPosition;
  backgroundTheme: BackgroundTheme;
}

export const initialCategoriesState: CategoriesState = {
  categories: [
    {
      id: Category.ICE_CREAM,
      name: 'Ice Cream',
      image: iceCreamImg,
      numItems: 6,
      textPosition: TextPosition.RIGHT,
      backgroundTheme: BackgroundTheme.DARK
    },
    {
      id: Category.GROCERY,
      name: 'Groceries',
      image: groceriesImg,
      numItems: 6,
      textPosition: TextPosition.LEFT,
      backgroundTheme: BackgroundTheme.LIGHT
    },
    {
      id: Category.FROZEN_FOOD,
      name: 'Frozen Foods',
      image: frozenFoodImg,
      numItems: 6,
      textPosition: TextPosition.RIGHT,
      backgroundTheme: BackgroundTheme.DARK
    },
    {
      id: Category.CONFECTIONERY,
      name: 'Confectioneries',
      image: confectioneryImg,
      numItems: 6,
      textPosition: TextPosition.LEFT,
      backgroundTheme: BackgroundTheme.LIGHT
    }
  ]
}