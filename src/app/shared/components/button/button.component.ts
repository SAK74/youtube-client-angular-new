import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color!: ThemePalette;

  @Input() effect?: 'raised' | 'flat' | 'stroked';

  @Input() type?: HTMLButtonElement['type'];
}
