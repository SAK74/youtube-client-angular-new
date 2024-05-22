import { Component, inject, OnInit } from '@angular/core';
import { SortParamService } from 'youtube/services/sort-param.service';
import { Store } from '@ngrx/store';
import type {
  CustomCard,
  ItemWithFavoriteModel,
} from 'redux/models/store.model';
import {
  selectCustomCardsArray,
  selectFavoritesIdArray,
  selectVideoListIdArray,
} from 'redux/selectors';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  private readonly store = inject(Store);

  private route = inject(ActivatedRoute);

  private router = inject(Router);

  videos$: Observable<ItemWithFavoriteModel[]> | null = null;

  cards$: Observable<CustomCard[]> | null = null;

  sortParams = inject(SortParamService);

  ngOnInit(): void {
    if (this.router.url === '/fav') {
      this.videos$ = this.store.select(selectFavoritesIdArray);
    } else {
      this.videos$ = this.store.select(selectVideoListIdArray);

      this.cards$ = this.store.select(selectCustomCardsArray);
    }
  }
}
