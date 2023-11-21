import { createReducer, on } from '@ngrx/store';
import {
  addCustomCard,
  delCustomCard,
} from 'redux/actions/custom-cards.actions';
import { CustomCard } from 'redux/models/store.model';
import { CardsStoreService } from 'redux/services/local-store.service';
import { v4 as uuid } from 'uuid';

export const customCardsReducer = createReducer<CustomCard[]>(
  CardsStoreService.read(),
  on(addCustomCard, (state, { type, ...card }) => {
    console.log('add custom card in reducer!');
    const temp = [...state];
    temp.push({ ...card, id: uuid() });
    return temp;
  }),
  on(delCustomCard, (state, { id }) => {
    const temp = [...state];
    const idx = temp.findIndex((card) => card.id === id);
    temp.splice(idx, 1);
    return temp;
  }),
);
