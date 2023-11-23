import { createReducer, on } from '@ngrx/store';
import {
  addCustomCard,
  delCustomCard,
} from 'redux/actions/custom-cards.actions';
import { CustomCard, StoreModel } from 'redux/models/store.model';
import { CardsStoreService } from 'redux/services/local-store.service';
import { v4 as uuid } from 'uuid';

const initialState: StoreModel['customCards'] = {};

export const customCardsReducer = createReducer<StoreModel['customCards']>(
  CardsStoreService.read(),
  on(addCustomCard, (state, { type, ...card }) => {
    const id = uuid();
    return { ...state, [id]: { ...card, id } };
  }),
  on(delCustomCard, (state, { id }) => {
    const temp = { ...state };

    delete temp[id];
    return temp;
  })
);
