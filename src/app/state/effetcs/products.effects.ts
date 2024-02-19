import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';
import * as AppActions from '../actions';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private myDataSrv: MydataService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadProducts),
      mergeMap(() =>
        this.myDataSrv.getProducts().pipe(
          map((products) => AppActions.setProducts({ products: products })),
          catchError((error) =>
            of(AppActions.loadProductsFailure({ error: error }))
          )
        )
      )
    )
  );
}
