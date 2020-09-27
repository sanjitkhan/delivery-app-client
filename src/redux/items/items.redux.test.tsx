import { ItemState } from "./data";
import { ItemsFunctionsEnum, ItemsTypes } from "./types";
import { addItem, deleteItem, fetchAllItems, ReceiveItems } from "./actions";
import { watchItemsFunctions } from "./saga";
import { itemsReducer } from ".";
import { getSagaTester } from "../../utils/testUtils";
import { Brand } from "../brands/data";
import { Category } from "../categories/data";

const item: ItemState = {
  id: 'britannia-item1',
  image: '',
  name: 'Britannia item 1',
  brand: Brand.BRITANNIA,
  category: [Category.CONFECTIONERY],
  stock: 97,
  price: 30.00,
  isFavourited: false
};

describe('(Redux) Testing Items actions', () => {
  it('should create an action to add a item', () => {    
    const expectedAction = {
      type: ItemsFunctionsEnum.ADD_ITEM,
      payload: item
    }
    expect(addItem(item)).toEqual(expectedAction);
  });

  it('should create an action to delete a item', () => {
    const id: string = 'britannia';
    const expectedAction = {
      type: ItemsFunctionsEnum.DELETE_ITEM,
      payload: id
    }
    expect(deleteItem(id)).toEqual(expectedAction);
  });

  it('should create an action to fetch all items', () => {
    const expectedAction = {
      type: ItemsFunctionsEnum.FETCH_ALL_ITEMS
    }
    expect(fetchAllItems()).toEqual(expectedAction);
  });

  it('should create an action to receive items', () => {
    const expectedAction = {
      type: ItemsFunctionsEnum.RECEIVE_ITEMS,
      payload: {
        items: [item, item]
      }
    }
    expect(ReceiveItems([item, item])).toEqual(expectedAction);
  });
});

describe('(Redux) Testing Items reducers', () => {
  it('should return the initial state', () => {
    const itemAction: ItemsTypes = {
      type: ItemsFunctionsEnum.ADD_ITEM,
      payload: item
    }
    expect(itemsReducer({ items: [] }, itemAction)).toEqual({
      items: []
    })
  });
  it('should return the received items', () => {
    const itemAction: ItemsTypes = {
      type: ItemsFunctionsEnum.RECEIVE_ITEMS,
      payload: {
        items: [item]
      }
    }
    expect(itemsReducer({ items: [] }, itemAction)).toEqual({
      items: [item]
    })
  });
});

describe('(Redux) Testing Items saga', () => {
  let sagaTester;
  beforeEach(() => {
    sagaTester = getSagaTester({
      items: [item]
    });
    sagaTester.start(watchItemsFunctions);
  });
  it('should add a item', async () => {
    sagaTester.dispatch(addItem(item));
    await sagaTester.waitFor(ItemsFunctionsEnum.RECEIVE_ITEMS);

    expect(sagaTester.wasCalled(ItemsFunctionsEnum.RECEIVE_ITEMS));
    expect(sagaTester.getState()).toMatchObject({
      items: {
        items: [item,item]
      }
    });
  });
  it('should delete a item', async () => {
    sagaTester.dispatch(deleteItem(item.id));
    await sagaTester.waitFor(ItemsFunctionsEnum.RECEIVE_ITEMS);

    expect(sagaTester.wasCalled(ItemsFunctionsEnum.RECEIVE_ITEMS));
    expect(sagaTester.getState()).toMatchObject({
      items: {
        items: []
      }
    });
  });
  it('should fetch all items', async () => {
    sagaTester.dispatch(fetchAllItems());
    await sagaTester.waitFor(ItemsFunctionsEnum.RECEIVE_ITEMS);

    expect(sagaTester.wasCalled(ItemsFunctionsEnum.RECEIVE_ITEMS));
    expect(sagaTester.getState()).toMatchObject({
      items: {
        items: [item]
      }
    });
  });
});