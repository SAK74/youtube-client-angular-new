import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShowListService {
  listIsShowed = false;
  set setShow(show: boolean) {
    this.listIsShowed = show;
  }
  show() {
    this.listIsShowed = true;
  }
}
