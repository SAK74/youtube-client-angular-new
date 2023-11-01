import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemModel } from 'youtube/models/search-item.model';
import { from, takeUntil, Subject } from 'rxjs';
import { ShowListService } from 'youtube/services/show-list.service';
import { SortParamService } from 'youtube/services/sort-param.service';
import mockedResponse from '../../services/mockResponse';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  items: ItemModel[] = [];

  destroyer = new Subject<void>();

  ngOnInit(): void {
    from(mockedResponse)
      .pipe(takeUntil(this.destroyer))
      .subscribe((response) => {
        this.items = response.items;
      });
  }

  ngOnDestroy(): void {
    this.destroyer.next();
    this.destroyer.complete();
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public listShow: ShowListService,
    public sortParams: SortParamService,
  ) {} // eslint-disable-line no-empty-function
}
