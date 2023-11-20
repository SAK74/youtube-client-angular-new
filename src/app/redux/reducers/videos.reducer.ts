import { createReducer, on } from '@ngrx/store';
import { setAllCardAction } from 'redux/actions/video-card.actions';
import { ItemModel } from 'youtube/models/search-item.model';

export const videoReducer = createReducer<ItemModel[]>(
  [],
  on(setAllCardAction, (state, { cards }) => cards)
);
