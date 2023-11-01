import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortParamService } from 'youtube/services/sort-param.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class SettingsComponent {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private sortParams: SortParamService) {}

  byDateClick() {
    this.sortParams.togleByDate();
  }

  byViewClick() {
    this.sortParams.togleByView();
  }

  byWordClick(value: string) {
    this.sortParams.word = value;
  }
}
