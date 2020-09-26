import { BackgroundTheme, BrandState, CategoryState, TextPosition } from "./data"
import { BrandsFunctionsEnum, BrandsTypes, CategoriesFunctionsEnum, CategoriesTypes } from "./types"
import britanniaImg from "../../assets/images/brand_britannia.png"
import { addBrand, addCategory, deleteBrand, deleteCategory, fetchAllBrands, fetchAllCategories, ReceiveBrands, ReceiveCategories } from "./actions"
import { watchBrandsFunctions, watchCategoriesFunctions } from "./saga"
import { brandsReducer, categoriesReducer } from ".";
import { getSagaTester } from "../../utils/testUtils"
import iceCreamImg from "../../assets/images/category_icecream.jpg"

const category: CategoryState = {
  id: 'icecream',
  name: 'Ice Cream',
  image: iceCreamImg,
  textPosition: TextPosition.RIGHT,
  backgroundTheme: BackgroundTheme.DARK
};

describe('(Redux) Testing Categories actions', () => {
  it('should create an action to add a category', () => {    
    const expectedAction = {
      type: CategoriesFunctionsEnum.ADD_CATEGORY,
      payload: category
    }
    expect(addCategory(category)).toEqual(expectedAction);
  });

  it('should create an action to delete a category', () => {
    const id: string = 'icecream';
    const expectedAction = {
      type: CategoriesFunctionsEnum.DELETE_CATEGORY,
      payload: id
    }
    expect(deleteCategory(id)).toEqual(expectedAction);
  });

  it('should create an action to fetch all categories', () => {
    const expectedAction = {
      type: CategoriesFunctionsEnum.FETCH_ALL_CATEGORIES
    }
    expect(fetchAllCategories()).toEqual(expectedAction);
  });

  it('should create an action to receive categories', () => {
    const expectedAction = {
      type: CategoriesFunctionsEnum.RECEIVE_CATEGORIES,
      payload: {
        categories: [category, category]
      }
    }
    expect(ReceiveCategories([category, category])).toEqual(expectedAction);
  });
});

describe('(Redux) Testing Categories reducers', () => {
  it('should return the initial state', () => {
    const categoryAction: CategoriesTypes = {
      type: CategoriesFunctionsEnum.ADD_CATEGORY,
      payload: category
    }
    expect(categoriesReducer({ categories: [] }, categoryAction)).toEqual({
      categories: []
    })
  });
  it('should return the received categories', () => {
    const categoryAction: CategoriesTypes = {
      type: CategoriesFunctionsEnum.RECEIVE_CATEGORIES,
      payload: {
        categories: [category]
      }
    }
    expect(categoriesReducer({ categories: [] }, categoryAction)).toEqual({
      categories: [category]
    })
  });
});

describe('(Redux) Testing Categories saga', () => {
  let sagaTester;
  beforeEach(() => {
    sagaTester = getSagaTester({
      categories: [category]
    });
    sagaTester.start(watchCategoriesFunctions);
  });
  it('should add a category', async () => {
    sagaTester.dispatch(addCategory(category));
    await sagaTester.waitFor(CategoriesFunctionsEnum.RECEIVE_CATEGORIES);

    expect(sagaTester.wasCalled(CategoriesFunctionsEnum.RECEIVE_CATEGORIES));
    expect(sagaTester.getState()).toMatchObject({
      categories: {
        categories: [category, category]
      }
    });
  });
  it('should delete a category', async () => {
    sagaTester.dispatch(deleteCategory(category.id));
    await sagaTester.waitFor(CategoriesFunctionsEnum.RECEIVE_CATEGORIES);

    expect(sagaTester.wasCalled(CategoriesFunctionsEnum.RECEIVE_CATEGORIES));
    expect(sagaTester.getState()).toMatchObject({
      categories: {
        categories: []
      }
    });
  });
  it('should fetch all categories', async () => {
    sagaTester.dispatch(fetchAllCategories());
    await sagaTester.waitFor(CategoriesFunctionsEnum.RECEIVE_CATEGORIES);

    expect(sagaTester.wasCalled(CategoriesFunctionsEnum.RECEIVE_CATEGORIES));
    expect(sagaTester.getState()).toMatchObject({
      categories: {
        categories: [category]
      }
    });
  });
});