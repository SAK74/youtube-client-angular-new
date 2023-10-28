import { Component } from '@angular/core';

export enum Sort {
  INC = 'inc',
  DEC = 'dec',
  NONE = '',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSearch = false;

  sortByDate: Sort = Sort.NONE;

  sortByWord = '';

  sortByView: Sort = Sort.NONE;

  dateSortClick() {
    this.sortByDate = this.sortByDate === Sort.DEC ? Sort.INC : Sort.DEC;
  }

  viewSortClick() {
    this.sortByView = this.sortByView === Sort.DEC ? Sort.INC : Sort.DEC;
  }

  handleWordChange(word: string) {
    this.sortByWord = word;
  }
}
