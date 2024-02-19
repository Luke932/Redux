import { createAction, props } from '@ngrx/store';
import { Place, Products, UserInfo } from '../models/interface';

// PLACE ACTIONS
export const loadPlaces = createAction('[Places Page] Load Places');
export const setPlaces = createAction(
  '[Places API] Places Loaded',
  props<{ places: Place[] }>()
);

export const loadPlaceFailure = createAction(
  '[Places API] Places Loading Failed',
  props<{ error: any }>()
);

export const deletePlace = createAction(
  '[Places Page] Delete Place',
  props<{ placeId: string }>()
);

export const updatePlace = createAction(
  '[Places Page] Update Place',
  props<{ placeId: string; updatedPlace: Place }>()
);

/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/;

//USER INFO ACTIONS
export const setUserInfo = createAction(
  '[User API] Set User Info',
  props<{ userInfo: UserInfo }>()
);

/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/;

//PRODUCTS ACTIONS
export const loadProducts = createAction('[Products Page] Load Products');
export const setProducts = createAction(
  '[Products API] Products Loaded',
  props<{ products: Products[] }>()
);

export const loadProductsFailure = createAction(
  '[Products API] Products Loading Failed',
  props<{ error: any }>()
);

// Nuove azioni per eliminare e modificare
export const deleteProduct = createAction(
  '[Products Page] Delete Product',
  props<{ productId: number }>()
);

export const updateProduct = createAction(
  '[Products Page] Update Product',
  props<{ productId: number; updatedProduct: Products }>()
);

export const clearPlace = createAction('[Place] Clear Place');
