import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'search/search-item.model';
import mockedResponse from 'services/mockResponse';
import { from } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  items: ItemModel[] = [];

  ngOnInit(): void {
    from(mockedResponse).subscribe((response) => {
      this.items = response.items;
    });
  }
}
