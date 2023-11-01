import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ShowListService } from 'youtube/services/show-list.service';
import { ShowSettingsService } from './services/show-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ShowSettingsService],
})
export class HeaderComponent {
  constructor(
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private showList: ShowListService,
    public showSettings: ShowSettingsService,
  ) {
    iconReg.addSvgIcon(
      'settings-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/search_settings.svg'),
    );
  }

  searchShow() {
    this.showList.setShow = true;
  }
}
