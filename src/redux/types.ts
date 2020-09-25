import { CountState } from "./count/types";
import { ItemsState } from "./items/types";

export interface ApplicationState {
    items: ItemsState;
    count: CountState;
}

export interface ResponseState {
    data: any;
    status: string;
    error?: string;
}