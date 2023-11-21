import {
  Component, OnInit, OnDestroy, inject,
} from '@angular/core';
import { takeUntil, Subject } from 'rxjs';
import { SortParamService } from 'youtube/services/sort-param.service';
import { HTTPRequestService } from 'youtube/services/http-request.service';
import { SearchService } from 'core/header/services/search.service';
import { Store } from '@ngrx/store';
import { StoreModel } from 'redux/models/store.model';
import { selectCustomCards, selectVideos } from 'redux/selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  items$ = this.store.select(selectVideos);

  cards$ = this.store.select(selectCustomCards);

  searchWord = '';

  destroyer = new Subject<void>();

  constructor(
    private request: HTTPRequestService,
    private searchService: SearchService,
    private readonly store: Store<StoreModel>,
  ) {
    // return to stored (if exist) search
    this.searchWord = searchService.searchWord;
    if (this.searchWord) {
      // this.showList(this.searchWord);
    }
  }

  ngOnInit(): void {
    this.searchService.$search
      ?.pipe(takeUntil(this.destroyer))
      .subscribe((word) => {
        this.searchWord = word;
        // this.showList(word);
      });

    // this.store
    //   .select((state) => state.customCards)
    //   .subscribe((cards) => {
    //     this.cards = cards;
    //   });
  }

  // private showList(search = '') {
  //   // this.items = [];
  //   // this.request
  //   //   .getSearch(search)
  //   //   .pipe(map((resp) => resp.items))
  //   //   .subscribe((items) => {
  //   //     items.forEach(({ id: { videoId } }) => {
  //   //       this.request
  //   //         .getVideo(videoId)
  //   //         .pipe(
  //   //           map((resp) => resp.items[0]),
  //   //           takeUntil(this.destroyer),
  //   //         )
  //   //         .subscribe((item) => {
  //   //           this.items.push(item);
  //   //         });
  //   //     });
  //   //   });
  // }

  ngOnDestroy(): void {
    this.searchService.searchWord = this.searchWord; // store prev search
    this.destroyer.next();
    this.destroyer.complete();
  }

  sortParams = inject(SortParamService);

  // private store = inject<Store<StoreModel>>(Store<StoreModel>);

  // customCards$=this.store.select(store=>store.customCards)
}
