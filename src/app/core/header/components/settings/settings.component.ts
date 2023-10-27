import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Output() dateClick = new EventEmitter();

  @Output() wordChange = new EventEmitter<string>();

  @Output() viewClick = new EventEmitter();
}
