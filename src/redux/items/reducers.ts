import { initialItemsState, ItemsState } from "./data";
import {
    ItemsFunctions,
    ItemsFunctionsEnum,
    ItemsTypes
} from './types';

const getReducer = (itemsFunctions: ItemsFunctions) => (
    state = initialItemsState,
    action: ItemsTypes
): ItemsState => {
    switch(action.type) {
        case itemsFunctions.RECEIVE_ITEMS: {
            return {
                items: action.payload.items
            }
        }
        default: {
            return state
        }
    }
}

export default getReducer(ItemsFunctionsEnum);