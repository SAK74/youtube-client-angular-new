import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class SettingsComponent {
  @Output() dateClick = new EventEmitter();

  @Output() wordChange = new EventEmitter<string>();

  @Output() viewClick = new EventEmitter();
}
