import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from 'youtube/models/search-item.model';
import { from, map } from 'rxjs';
import mockResponse from '../../services/mockResponse';

@Component({
  selector: 'detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss'],
})
export class DetailedViewComponent {
  id = '';

  item!: ItemModel;

  error?: string;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      from(mockResponse)
        .pipe(map((resp) => resp.items.find((item) => item.id === this.id)))
        .subscribe((item) => {
          if (!item) {
            this.error = 'Item not founded...';
          } else this.item = item;
        });
    });
  }
}
