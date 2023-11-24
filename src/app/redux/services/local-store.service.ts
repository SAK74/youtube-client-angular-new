import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCustomCards } from 'redux/selectors';

const CARDS_KEY = 'stored-cards';

@Injectable()
export class CardsStoreService {
  private store = inject(Store);

  save() {
    this.store
      .select(selectCustomCards)
      .subscribe((cards) => {
        localStorage.setItem(CARDS_KEY, JSON.stringify(cards));
      })
      .unsubscribe();
  }

  static read() {
    return JSON.parse(localStorage.getItem(CARDS_KEY) || '[]');
  }

  static remove() {
    localStorage.removeItem(CARDS_KEY);
  }
}
