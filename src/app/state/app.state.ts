import { Place, Products, UserInfo } from "../models/interface";

export interface PlaceState {
    places: Place[];
    loadError: any;
}

export interface ProductsState {
    products: Products[];
    total: number;
}

export interface AppState {
    place: PlaceState;
    userInfo: UserInfo;
    product: ProductsState;
}