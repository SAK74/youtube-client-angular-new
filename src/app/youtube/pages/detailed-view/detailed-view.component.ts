import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detailed-view',
  templateUrl: './detailed-view.component.html',
})
export class DetailedViewComponent {
  id = '';

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
    });
  }
}
