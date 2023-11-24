import { createReducer, on } from '@ngrx/store';
import {
  addItemAction,
  addToFavAction,
  removeFromFavAction,
  resetStateAction,
} from 'redux/actions/video-card.actions';
import { StoreModel } from 'redux/models/store.model';

const initialState: StoreModel['videos'] = {};

export const videoReducer = createReducer(
  initialState,
  on(addItemAction, (state, { type, ...card }) => ({
    ...state,
    [card.id]: { ...card, favorite: false },
  })),
  on(resetStateAction, () => initialState),
  on(addToFavAction, (state, { id }) => {
    console.log('favorite reducer added to fav!');
    return {
      ...state,
      [id]: { ...state[id], favorite: true },
    };
  }),
  on(removeFromFavAction, (state, { id }) => ({
    ...state,
    [id]: { ...state[id], favorite: false },
  })),
);
