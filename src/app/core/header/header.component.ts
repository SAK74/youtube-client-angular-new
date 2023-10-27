import {
  Component, Input, Output, EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showSettings = true; // to change

  @Input() showSearch = false;

  @Output() showSearchChange = new EventEmitter<boolean>();

  @Output('dateSort') dateSortChange = new EventEmitter();

  toggleSettingsShow() {
    this.showSettings = !this.showSettings;
  }

  searchShow() {
    this.showSearchChange.emit(true);
  }
}
