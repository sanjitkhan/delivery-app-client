import React from "react";
import { Card } from "semantic-ui-react";

export interface CategoryCardProps {
  id?: string;
  image: string;
  name: string;
  numBrands: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  name,
  numBrands
}:CategoryCardProps) => {
  return (
    <Card
      image={image}
      header={name}
      meta={`${numBrands} brands`}
    />
  );
}

export default CategoryCard;