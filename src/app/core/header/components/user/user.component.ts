import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    iconReg.addSvgIcon(
      'user-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/login.svg'),
    );
  }
}
