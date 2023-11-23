import { createReducer, on } from '@ngrx/store';
import {
  addItemAction,
  resetStateAction,
} from 'redux/actions/video-card.actions';
import { StoreModel } from 'redux/models/store.model';

const initialState: StoreModel['videos'] = {};

export const videoReducer = createReducer<StoreModel['videos']>(
  {},
  on(addItemAction, (state, { type, ...card }) => {
    return { ...state, [card.id]: { ...card, favorite: false } };
  }),
  on(resetStateAction, () => initialState)
);
