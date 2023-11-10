import {
  Component, OnInit, OnDestroy, inject,
} from '@angular/core';
import { ItemModel } from 'youtube/models/search-item.model';
import { takeUntil, Subject, map } from 'rxjs';
import { SortParamService } from 'youtube/services/sort-param.service';
import { HTTPRequestService } from 'youtube/services/http-request.service';
import { SearchService } from 'core/header/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  items: ItemModel[] = [];

  searchWord = '';

  destroyer = new Subject<void>();

  constructor(
    private request: HTTPRequestService,
    private searchService: SearchService,
  ) {
    // return to stored (if exist) search
    this.searchWord = searchService.searchWord;
    if (this.searchWord) {
      this.showList(this.searchWord);
    }
  }

  ngOnInit(): void {
    this.searchService.$search
      ?.pipe(takeUntil(this.destroyer))
      .subscribe((word) => {
        this.searchWord = word;
        this.showList(word);
      });
  }

  private showList(search = '') {
    this.items = [];
    this.request
      .getSearch(search)
      .pipe(map((resp) => resp.items))
      .subscribe((items) => {
        items.forEach(({ id: { videoId } }) => {
          this.request
            .getVideo(videoId)
            .pipe(
              map((resp) => resp.items[0]),
              takeUntil(this.destroyer),
            )
            .subscribe((item) => {
              this.items.push(item);
            });
        });
      });
  }

  ngOnDestroy(): void {
    this.searchService.searchWord = this.searchWord; // store prev search
    this.destroyer.next();
    this.destroyer.complete();
  }

  sortParams = inject(SortParamService);
}
