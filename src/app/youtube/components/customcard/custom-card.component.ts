import { Component, Input } from '@angular/core';
import { CustomCard } from 'redux/models/store.model';

@Component({
  selector: 'custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() item!: CustomCard;
}
