import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';
import * as AppActions from '../actions';

@Injectable()
export class PlaceEffects {
  constructor(private actions$: Actions, private myDataSrv: MydataService) {}

  loadPlaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadPlaces),
      mergeMap(() =>
        this.myDataSrv.getPlaces().pipe(
          map((places) => AppActions.setPlaces({ places: places })),
          catchError((error) =>
            of(AppActions.loadPlaceFailure({ error: error }))
          )
        )
      )
    )
  );
}
