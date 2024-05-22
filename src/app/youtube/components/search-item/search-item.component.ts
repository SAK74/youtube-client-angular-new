import { Component, Input, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  addToFavAction,
  removeFromFavAction,
} from 'redux/actions/video-card.actions';
import { ItemWithFavoriteModel } from 'redux/models/store.model';
// import { selectVideoById } from 'redux/selectors';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() item!: ItemWithFavoriteModel;

  // ngOnInit(): void {
  //   this.item$ = this.store.select(selectVideoById(this.videoID));
  // }

  private router = inject(Router);

  private route = inject(ActivatedRoute);

  private store = inject(Store);

  // item$?: Observable<ItemWithFavoriteModel>;

  cardClick() {
    this.router.navigate([this.item.id], { relativeTo: this.route });
  }

  addToFavs() {
    this.store.dispatch(addToFavAction({ id: this.item.id }));
  }

  removeFromFavs() {
    this.store.dispatch(removeFromFavAction({ id: this.item.id }));
  }
}
