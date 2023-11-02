import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShowListService {
  listIsShowed = true; // to change

  set setShow(show: boolean) {
    this.listIsShowed = show;
  }

  show() {
    this.listIsShowed = true;
  }
}
