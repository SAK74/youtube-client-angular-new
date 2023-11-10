import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { ShowSettingsService } from './services/show-settings.service';
import { SearchService } from './services/search.service';

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
    public showSettings: ShowSettingsService,
    private searchService: SearchService,
  ) {
    iconReg.addSvgIcon(
      'settings-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/search_settings.svg'),
    );

    const inputChangeObserver = this.searchCtrl.valueChanges.pipe(
      filter((word) => word.length >= 3),
      debounceTime(2000),
    );
    searchService.setObserver(inputChangeObserver);
  }

  searchCtrl = new FormControl('', { nonNullable: true });
}
