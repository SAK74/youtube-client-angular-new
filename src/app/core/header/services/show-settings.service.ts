import { Injectable } from '@angular/core';

@Injectable()
export class ShowSettingsService {
  isShow = false;

  toggle() {
    this.isShow = !this.isShow;
  }
}
