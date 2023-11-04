import { Component, Input, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemModel } from 'youtube/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() item!: ItemModel;

  private router = inject(Router);

  private route = inject(ActivatedRoute);

  cardClick() {
    this.router.navigate([this.item.id], { relativeTo: this.route });
  }
}
