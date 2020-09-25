import { d } from './saga';
import {
    ItemsFunctions,
    ItemsFunctionsEnum,
    ItemsState,
    ItemsTypes
} from './types';

const initialState: ItemsState = {
    items: [d,d]
}

const getReducer = (itemsFunctions: ItemsFunctions) => (
    state = initialState,
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