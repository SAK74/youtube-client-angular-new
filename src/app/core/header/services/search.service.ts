import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  $search: Observable<string> | null = null;

  setObserver(subject: Observable<string>) {
    this.$search = subject;
  }

  searchWord = '';
}
