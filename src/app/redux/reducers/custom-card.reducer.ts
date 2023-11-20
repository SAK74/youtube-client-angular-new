import { createReducer, on } from '@ngrx/store';
import {
  addCustomCard,
  delCustomCard,
} from 'redux/actions/custom-cards.actions';
import { CustomCard } from 'redux/models/store.model';
import { v4 as uuid } from 'uuid';
export const customCardsReducer = createReducer<CustomCard[]>(
  [],
  on(addCustomCard, (state, { type, ...card }) => {
    const temp = [...state];
    temp.push({ ...card, id: uuid() });
    return temp;
  }),
  on(delCustomCard, (state, { type, id }) => {
    const temp = [...state];
    const idx = temp.findIndex((card) => card.id === id);
    temp.splice(idx, 1);
    return temp;
  })
);
