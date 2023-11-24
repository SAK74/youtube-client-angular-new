import { createAction, props } from '@ngrx/store';
import { ItemModel } from 'youtube/models/search-item.model';

export const addItemAction = createAction(
  '[video_cards] add',
  props<ItemModel>(),
);

export const fetchCardsAction = createAction(
  '[video_cards] fetch',
  props<{ search: string; perPage: number }>(),
);

export const resetStateAction = createAction('[video_cards] reset');

export const resetAndFetchAction = createAction(
  '[video_cards] reset&fetch',
  props<{ search: string; perPage: number }>(),
);

export const addToFavAction = createAction(
  '[Favorites] add',
  props<{ id: string }>(),
);

export const removeFromFavAction = createAction(
  '[Favorites] remove',
  props<{ id: string }>(),
);
