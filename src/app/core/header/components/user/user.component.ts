import { Component, OnDestroy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'auth/services/login.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnDestroy {
  userIsLogged = this.loginService.userIsLogged;

  userName = this.loginService.userName;

  constructor(
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private loginService: LoginService,
    private router: Router
  ) {
    iconReg.addSvgIcon(
      'user-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/login.svg')
    );
    loginService.loginObserver
      .pipe(takeUntil(this.destroyer))
      .subscribe((isLogged) => {
        this.userIsLogged = isLogged;
      });
    loginService.nameObserver
      .pipe(takeUntil(this.destroyer))
      .subscribe((name) => {
        this.userName = name;
      });
  }

  logout() {
    this.loginService.logout();
  }

  goToAdmin() {
    this.router.navigateByUrl('admin');
  }

  toYoutube() {
    this.router.navigateByUrl('youtube');
  }

  destroyer = new Subject<void>();

  ngOnDestroy(): void {
    this.destroyer.next();
    this.destroyer.complete();
  }
}
