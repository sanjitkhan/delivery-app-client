import { Brand, BrandState } from "./data";
import { BrandsFunctionsEnum, BrandsTypes } from "./types";
import { addBrand, deleteBrand, fetchAllBrands, ReceiveBrands } from "./actions";
import { watchBrandsFunctions } from "./saga";
import { brandsReducer } from ".";
import { getSagaTester } from "../../utils/testUtils";

const brand: BrandState = {
  id: Brand.BRITANNIA,
  name: 'Britannia',
  image: '',
  numItems: 7,
  isFavourited: false
};

describe('(Redux) Testing Brands actions', () => {
  it('should create an action to add a brand', () => {    
    const expectedAction = {
      type: BrandsFunctionsEnum.ADD_BRAND,
      payload: brand
    }
    expect(addBrand(brand)).toEqual(expectedAction);
  });

  it('should create an action to delete a brand', () => {
    const id: string = 'britannia';
    const expectedAction = {
      type: BrandsFunctionsEnum.DELETE_BRAND,
      payload: id
    }
    expect(deleteBrand(id)).toEqual(expectedAction);
  });

  it('should create an action to fetch all brands', () => {
    const expectedAction = {
      type: BrandsFunctionsEnum.FETCH_ALL_BRANDS
    }
    expect(fetchAllBrands()).toEqual(expectedAction);
  });

  it('should create an action to receive brands', () => {
    const expectedAction = {
      type: BrandsFunctionsEnum.RECEIVE_BRANDS,
      payload: {
        brands: [brand, brand]
      }
    }
    expect(ReceiveBrands([brand, brand])).toEqual(expectedAction);
  });
});

describe('(Redux) Testing Brands reducers', () => {
  it('should return the initial state', () => {
    const brandAction: BrandsTypes = {
      type: BrandsFunctionsEnum.ADD_BRAND,
      payload: brand
    }
    expect(brandsReducer({ brands: [] }, brandAction)).toEqual({
      brands: []
    })
  });
  it('should return the received brands', () => {
    const brandAction: BrandsTypes = {
      type: BrandsFunctionsEnum.RECEIVE_BRANDS,
      payload: {
        brands: [brand]
      }
    }
    expect(brandsReducer({ brands: [] }, brandAction)).toEqual({
      brands: [brand]
    })
  });
});

describe('(Redux) Testing Brands saga', () => {
  let sagaTester;
  beforeEach(() => {
    sagaTester = getSagaTester({
      brands: [brand]
    });
    sagaTester.start(watchBrandsFunctions);
  });
  it('should add a brand', async () => {
    sagaTester.dispatch(addBrand(brand));
    await sagaTester.waitFor(BrandsFunctionsEnum.RECEIVE_BRANDS);

    expect(sagaTester.wasCalled(BrandsFunctionsEnum.RECEIVE_BRANDS));
    expect(sagaTester.getState()).toMatchObject({
      brands: {
        brands: [brand,brand]
      }
    });
  });
  it('should delete a brand', async () => {
    sagaTester.dispatch(deleteBrand(brand.id));
    await sagaTester.waitFor(BrandsFunctionsEnum.RECEIVE_BRANDS);

    expect(sagaTester.wasCalled(BrandsFunctionsEnum.RECEIVE_BRANDS));
    expect(sagaTester.getState()).toMatchObject({
      brands: {
        brands: []
      }
    });
  });
  it('should fetch all brands', async () => {
    sagaTester.dispatch(fetchAllBrands());
    await sagaTester.waitFor(BrandsFunctionsEnum.RECEIVE_BRANDS);

    expect(sagaTester.wasCalled(BrandsFunctionsEnum.RECEIVE_BRANDS));
    expect(sagaTester.getState()).toMatchObject({
      brands: {
        brands: [brand]
      }
    });
  });
});