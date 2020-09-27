import { initialBrandsState, BrandsState } from "./data";
import { BrandsFunctions, BrandsTypes, BrandsFunctionsEnum } from "./types";

const getReducer = (brandsFunctions: BrandsFunctions) => (
    state = initialBrandsState,
    action: BrandsTypes
): BrandsState => {
    switch(action.type) {
        case brandsFunctions.RECEIVE_BRANDS: {
            return {
                brands: action.payload.brands
            }
        }
        default: {
            return state
        }
    }
}

export default getReducer(BrandsFunctionsEnum);