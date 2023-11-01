import { Injectable } from '@angular/core';
import { Sort } from 'youtube/models/sort.type';

@Injectable({ providedIn: 'root' })
export class SortParamService {
  sortByDate: Sort = Sort.NONE;

  sortByView: Sort = Sort.NONE;

  filterByWord = '';

  togleByDate() {
    this.sortByDate = this.sortByDate === Sort.DEC ? Sort.INC : Sort.DEC;
  }

  togleByView() {
    this.sortByView = this.sortByView === Sort.DEC ? Sort.INC : Sort.DEC;
  }

  set word(value: string) {
    this.filterByWord = value;
  }
}
