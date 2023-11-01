import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ShowListService } from 'youtube/services/show-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showSettings = false;

  // @Input() showSearch = false;

  @Output() showSearchChange = new EventEmitter<boolean>();

  @Output('dateSort') dateSortChange = new EventEmitter();

  @Output() wordChange = new EventEmitter<string>();

  @Output() viewClick = new EventEmitter();

  constructor(
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private showList: ShowListService
  ) {
    iconReg.addSvgIcon(
      'settings-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/search_settings.svg')
    );
  }

  toggleSettingsShow() {
    this.showSettings = !this.showSettings;
  }

  searchShow() {
    this.showList.setShow = true;
  }
}
