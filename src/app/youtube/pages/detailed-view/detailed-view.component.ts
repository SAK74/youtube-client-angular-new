import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from 'youtube/models/search-item.model';
import { Subject, map, takeUntil } from 'rxjs';
import { HTTPRequestService } from 'youtube/services/http-request.service';

@Component({
  selector: 'detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss'],
})
export class DetailedViewComponent implements OnDestroy {
  item?: ItemModel;

  error?: string;

  constructor(
    private route: ActivatedRoute,
    private request: HTTPRequestService,
  ) {
    route.paramMap.subscribe((params) => {
      const id = params.get('id') || '';

      request
        .getVideo(id)
        .pipe(
          map((resp) => resp.items[0]),
          takeUntil(this.destroyer),
        )
        .subscribe((item) => {
          this.item = item;
        });
    });
  }

  destroyer = new Subject<void>();

  ngOnDestroy(): void {
    this.destroyer.next();
    this.destroyer.complete();
  }
}
