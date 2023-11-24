import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  addItemAction,
  fetchCardsAction,
  resetAndFetchAction,
  resetStateAction,
} from 'redux/actions/video-card.actions';
import { map, mergeMap, from, concatMap } from 'rxjs';
import { HTTPRequestService } from 'youtube/services/http-request.service';

export const fetchVideosEffects = createEffect(
  (actions$ = inject(Actions), request = inject(HTTPRequestService)) => {
    return actions$.pipe(
      ofType(fetchCardsAction),
      mergeMap(({ search, perPage }) =>
        request.getSearch(search, perPage).pipe(
          map((resp) => resp.items),
          mergeMap((items) =>
            from(items).pipe(
              mergeMap(({ id: { videoId } }) =>
                request
                  .getVideo(videoId)
                  .pipe(map((videoResp) => addItemAction(videoResp.items[0])))
              )
            )
          )
        )
      )
    );
  },
  { functional: true, dispatch: true }
);

export const restAndFetchEffect = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(resetAndFetchAction),
      concatMap(({ search, perPage }) => [
        resetStateAction(),
        fetchCardsAction({ search, perPage }),
      ])
    );
  },
  { functional: true, dispatch: true }
);
