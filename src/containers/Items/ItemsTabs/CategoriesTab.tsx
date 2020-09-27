import React from "react";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import { CategoriesState } from "../../../redux/categories/data";
import { CategoriesActions } from "../../../redux/categories/types";
import { ApplicationState } from "../../../redux/types";
import { 
  fetchAllCategories as fetchAllCategoriesAction,
  addCategory as addCategoryAction
 } from "../../../redux/categories/actions";
import { connect } from "react-redux";

interface CategoriesTabProps extends CategoriesState, Partial<CategoriesActions> {}

const CategoriesTab: React.FC<CategoriesTabProps> = ({
  categories,
}:CategoriesTabProps) => {
  return (
    <div>
      {categories.map(category => (
        <CategoryCard
          key={category.id}
          {...category}
        />
      ))}
    </div>
  );
}

function mapStateToProps(
  state: ApplicationState
): CategoriesState {
  const { categories } = state;
  return {
    categories: categories.categories
  };
}
  
const mapActionToProps: Partial<CategoriesActions> = {
  addCategory: addCategoryAction,
  fetchAllCategories: fetchAllCategoriesAction
};

export default connect(
  mapStateToProps,
  mapActionToProps
 )(CategoriesTab);