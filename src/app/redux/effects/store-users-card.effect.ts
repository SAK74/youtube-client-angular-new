import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  addCustomCard,
  delCustomCard,
} from 'redux/actions/custom-cards.actions';
import { tap, first } from 'rxjs';
import { CardsStoreService } from 'redux/services/local-store.service';

export const storeCards = createEffect(
  (actions$ = inject(Actions), storeService = inject(CardsStoreService)) => {
    return actions$.pipe(
      ofType(addCustomCard, delCustomCard),
      first(),
      tap(() => {
        storeService.save();
      })
    );
  },
  { functional: true, dispatch: true }
);
