import { Component, inject } from '@angular/core';
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
  sortParams = inject(SortParamService);

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
