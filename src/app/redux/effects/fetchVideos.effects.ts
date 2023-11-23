import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  addItemAction,
  fetchCardsAction,
  resetAndFetchAction,
  resetStateAction,
} from 'redux/actions/video-card.actions';
import { map, tap, mergeMap, from, concatMap } from 'rxjs';
import { HTTPRequestService } from 'youtube/services/http-request.service';

export const fetchVideosEffects = createEffect(
  (actions$ = inject(Actions), request = inject(HTTPRequestService)) => {
    return actions$.pipe(
      ofType(fetchCardsAction),
      tap((params) => console.log('source: ', params)),
      mergeMap(({ search, perPage }) =>
        request.getSearch(search, perPage).pipe(
          map((resp) => resp.items),
          tap((items) => console.log('items: ', items)),
          mergeMap((items) =>
            from(items).pipe(
              tap((video) => console.log('video: ', video)),
              mergeMap(({ id: { videoId } }) =>
                request.getVideo(videoId).pipe(
                  tap((resp) => console.log('video resp: ', resp)),
                  map((videoResp) => addItemAction(videoResp.items[0]))
                )
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
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(resetAndFetchAction),
      concatMap(({ search, perPage }) => [
        resetStateAction(),
        fetchCardsAction({ search, perPage }),
      ])
    ),
  { functional: true, dispatch: true }
);

// @Injectable()
// export class VideoEffect {
//   constructor(private actions$: Actions, private request: HTTPRequestService) {}
//   fetchVideos$ = createEffect(
//     () => {
//       return this.actions$.pipe(
//         ofType(fetchCardsAction),
//         tap((params) => console.log('source: ', params)),
//         mergeMap(({ search, perPage }) =>
//           this.request.getSearch(search, perPage).pipe(
//             map((resp) => resp.items),
//             tap((items) => console.log('items: ', items)),
//             mergeMap(
//               (items) =>
//                 from(items).pipe(
//                   tap((video) => console.log('video: ', video)),
//                   mergeMap(({ id: { videoId } }) =>
//                     this.request.getVideo(videoId).pipe(
//                       tap((resp) => console.log('video resp: ', resp)),
//                       map((videoResp) => addItemAction(videoResp.items[0]))
//                     )
//                   )
//                 )

//             )
//           )
//         )
//       );
//     },
//     { functional: false, dispatch: true }
//   );
// }
