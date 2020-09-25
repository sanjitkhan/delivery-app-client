import React from "react";
import CategoryCard, { backgroundThemeEnum, CategoryCardProps, positionEnum } from "../../../components/CategoryCard/CategoryCard";
import frozenFoodImg from "../../../assets/images/category_frozenfoods.jpg"
import iceCreamImg from "../../../assets/images/category_icecream.jpg"
import confectioneryImg from "../../../assets/images/category_confectionery.jpg"
import groceriesImg from "../../../assets/images/category_groceries.jpg"

const CategoriesTab: React.FC = () => {
  const categories: Omit<CategoryCardProps, 'width'>[] = [
    {
      id: 'ice-cream',
      name: 'Ice Cream',
      image: iceCreamImg,
      numBrands: 3,
      textPosition: positionEnum.RIGHT,
      backgroundTheme: backgroundThemeEnum.DARK
    },
    {
      id: 'groceries',
      name: 'Groceries',
      image: groceriesImg,
      numBrands: 8,
      textPosition: positionEnum.LEFT,
      backgroundTheme: backgroundThemeEnum.LIGHT
    },
    {
      id: 'frozen-foods',
      name: 'Frozen Foods',
      image: frozenFoodImg,
      numBrands: 5,
      textPosition: positionEnum.RIGHT,
      backgroundTheme: backgroundThemeEnum.DARK
    },
    {
      id: 'confectioneries',
      name: 'Confectioneries',
      image: confectioneryImg,
      numBrands: 7,
      textPosition: positionEnum.LEFT,
      backgroundTheme: backgroundThemeEnum.LIGHT
    }
  ]
  return (
    <div>
      {categories.map(item => (
        <CategoryCard
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}

export default CategoriesTab;