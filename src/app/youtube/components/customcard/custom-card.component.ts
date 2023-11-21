import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { delCustomCard } from 'redux/actions/custom-cards.actions';
import { CustomCard } from 'redux/models/store.model';

@Component({
  selector: 'custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() item!: CustomCard;

  private store = inject(Store);

  deleteCard() {
    this.store.dispatch(delCustomCard({ id: this.item.id }));
  }
}
