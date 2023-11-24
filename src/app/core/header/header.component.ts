import { Component, OnDestroy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, filter } from 'rxjs';
import { Store } from '@ngrx/store';
import { resetAndFetchAction } from 'redux/actions/video-card.actions';
import { Router } from '@angular/router';
import { ShowSettingsService } from './services/show-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ShowSettingsService],
})
export class HeaderComponent implements OnDestroy {
  inputSubscription!: Subscription;

  constructor(
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer,
    public showSettings: ShowSettingsService,
    private store: Store,
    public router: Router,
  ) {
    iconReg.addSvgIcon(
      'settings-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/search_settings.svg'),
    );

    this.inputSubscription = this.searchCtrl.valueChanges
      .pipe(
        filter((word) => word.length >= 3),
        debounceTime(2000),
      )
      .subscribe((word) => {
        store.dispatch(resetAndFetchAction({ search: word, perPage: 2 }));
        router.navigateByUrl('youtube');
      });
  }

  searchCtrl = new FormControl('', { nonNullable: true });

  ngOnDestroy() {
    this.inputSubscription.unsubscribe();
  }
}
