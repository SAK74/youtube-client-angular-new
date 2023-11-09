import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ShowListService } from 'youtube/services/show-list.service';
import { ShowSettingsService } from './services/show-settings.service';
import { FormControl, NgModel } from '@angular/forms';
import { SearchService } from './services/search.service';
import { debounceTime, filter } from 'rxjs';

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
    private searchService: SearchService
  ) {
    iconReg.addSvgIcon(
      'settings-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/search_settings.svg')
    );
    searchService.$search = this.searchCtrl.valueChanges.pipe(
      filter((word) => word.length >= 3),
      debounceTime(2000)
    );
  }

  searchShow() {
    // this.showList.setShow = true;
    console.log(this.searchCtrl);
  }

  // input?: NgModel;
  // some(input: NgModel) {
  //   input.valueChanges;
  // }

  searchCtrl = new FormControl('', { nonNullable: true });
}
