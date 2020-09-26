import { ItemState } from './data';
import {
    ItemsFunctionsEnum,
    ItemsTypes
} from './types';

export function addItem(item: ItemState): ItemsTypes {
    return {
        type: ItemsFunctionsEnum.ADD_ITEM,
        payload: item
    }
}

export function deleteItem(id: string): ItemsTypes {
    return {
        type: ItemsFunctionsEnum.DELETE_ITEM,
        payload: id
    }
}

export function fetchItem(id: string): ItemsTypes {
    return {
        type: ItemsFunctionsEnum.FETCH_ITEM,
        payload: id
    }
}

export function fetchAllItems(): ItemsTypes {
    return {
        type: ItemsFunctionsEnum.FETCH_ALL_ITEMS
    }
}

export function ReceiveItems(items: ItemState[]): ItemsTypes {
    return {
        type: ItemsFunctionsEnum.RECEIVE_ITEMS,
        payload: {
            items
        }
    }
}
