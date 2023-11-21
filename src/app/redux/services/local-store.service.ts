import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreModel } from 'redux/models/store.model';
import { selectCustomCards } from 'redux/selectors';

const CARDS_KEY = 'stored-cards';

@Injectable()
export class CardsStoreService {
  private store = inject<Store<StoreModel>>(Store<StoreModel>);

  save() {
    console.log('stored in service!!!');
    this.store.select(selectCustomCards).subscribe((cards) => {
      localStorage.setItem(CARDS_KEY, JSON.stringify(cards));
    });
  }

  static read() {
    return JSON.parse(localStorage.getItem(CARDS_KEY) || '[]');
  }

  static remove() {
    localStorage.removeItem(CARDS_KEY);
  }
}
