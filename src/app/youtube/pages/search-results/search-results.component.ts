import { Component, inject } from '@angular/core';
import { SortParamService } from 'youtube/services/sort-param.service';
import { Store } from '@ngrx/store';
import { StoreModel } from 'redux/models/store.model';
import { selectCustomCards, selectVideos } from 'redux/selectors';
import { map } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  private readonly store = inject<Store<StoreModel>>(Store<StoreModel>);

  items$ = this.store
    .select(selectVideos)
    .pipe(map((videos) => Object.values(videos)));

  cards$ = this.store
    .select(selectCustomCards)
    .pipe(map((cards) => Object.values(cards)));

  sortParams = inject(SortParamService);
}
