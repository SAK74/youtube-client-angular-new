import {
  Component, Input, Output, EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showSettings = false;

  @Input() showSearch!: boolean;

  @Output() showSearchChange = new EventEmitter<boolean>();

  toggleSettingsShow() {
    this.showSettings = !this.showSettings;
  }

  toggleSearchShow() {
    this.showSearchChange.emit(!this.showSearch);
  }
}
