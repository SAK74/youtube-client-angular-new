import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from 'youtube/models/search-item.model';
import { Observable, mergeMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectVideoById } from 'redux/selectors';

@Component({
  selector: 'detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss'],
})
export class DetailedViewComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly store = inject(Store);

  item$: Observable<ItemModel | undefined> = this.route.paramMap.pipe(
    mergeMap((params) => {
      const id = params.get('id');
      return this.store.select(selectVideoById(id || ''));
    }),
  );
}
