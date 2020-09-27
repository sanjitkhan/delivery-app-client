import { ItemState, ItemsState } from "./data";

export enum ItemsFunctionsEnum {
    ADD_ITEM = 'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS',
    RECEIVE_ITEMS = 'RECEIVE_ITEMS'
}

type AddItem = ItemsFunctionsEnum.ADD_ITEM;
type DeleteItem = ItemsFunctionsEnum.DELETE_ITEM;
type FetchAllItems = ItemsFunctionsEnum.FETCH_ALL_ITEMS;
type ReceiveItems = ItemsFunctionsEnum.RECEIVE_ITEMS;

// TODO: try to reduce further
export interface ItemsFunctions {
    ADD_ITEM: AddItem;
    DELETE_ITEM: DeleteItem;
    FETCH_ALL_ITEMS: FetchAllItems;
    RECEIVE_ITEMS: ReceiveItems;
}

interface AddItemAction {
    type: AddItem,
    payload: ItemState
}

interface DeleteItemAction {
    type: DeleteItem,
    payload: string
}

interface FetchAllItemsAction {
    type: FetchAllItems
}

interface ReceiveItemsAction {
    type: ReceiveItems,
    payload: ItemsState
}
export interface ItemsActions {
    addItem: any;
    deleteItem: any;
    fetchItem: any;
    fetchAllItems: any;
    receiveItems: any;
}

export type ItemsTypes = AddItemAction | DeleteItemAction  | FetchAllItemsAction | ReceiveItemsAction;