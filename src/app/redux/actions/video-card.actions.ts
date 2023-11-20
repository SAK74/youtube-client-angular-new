import { createAction, props } from '@ngrx/store';
import { ItemModel } from 'youtube/models/search-item.model';

export const setAllCardAction = createAction(
  '[video_cards] set',
  props<{ cards: ItemModel[] }>()
);
