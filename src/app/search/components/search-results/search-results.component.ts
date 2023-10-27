import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from 'search/search-item.model';
import mockedResponse from 'services/mockResponse';
import { from } from 'rxjs';
import { SortType } from 'app.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  items: ItemModel[] = [];

  @Input('sortByDate') byDate!: SortType;

  @Input('sortWord') byWord!: string;

  ngOnInit(): void {
    from(mockedResponse).subscribe((response) => {
      this.items = response.items;
    });
  }
}
