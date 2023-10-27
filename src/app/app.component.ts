import { Component } from '@angular/core';

export type SortType = 'inc' | 'dec' | false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSearch = true; // to change!!

  sortByDate: SortType = false;

  sortByWord = '';

  sortByView: SortType = false;

  dateSortClick() {
    this.sortByDate = this.sortByDate === 'dec' ? 'inc' : 'dec';
  }

  viewSortClick() {
    this.sortByView = this.sortByView === 'dec' ? 'inc' : 'dec';
  }

  handleWordChange(val: string) {
    this.sortByWord = val;
  }
}
