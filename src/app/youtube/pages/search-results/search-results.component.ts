import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ItemModel } from 'youtube/models/search-item.model';
import mockedResponse from '../../services/mockResponse';
import { from, takeUntil, Subject } from 'rxjs';
import { Sort } from 'app.component';
import { ShowListService } from 'youtube/services/show-list.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  items: ItemModel[] = [];

  destroyer = new Subject<void>();

  @Input('sortByDate') byDate!: Sort;

  @Input('sortByView') byViews!: Sort;

  @Input('sortWord') byWord!: string;

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

  constructor(public listShow: ShowListService) {}
}
