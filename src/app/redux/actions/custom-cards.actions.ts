import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'redux/models/store.model';

export const addCustomCard = createAction(
  '[user_cards] add',
  props<Omit<CustomCard, 'id'>>()
);

export const delCustomCard = createAction(
  '[user_cards] del',
  props<{ id: string }>()
);
