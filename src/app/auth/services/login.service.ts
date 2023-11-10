import { Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { DevLoggerService } from 'core/services/dev-logger.service';
import { ProdLoggerService } from 'core/services/prod-logger.service';
import { Subject } from 'rxjs';

const TOKEN_KEY = 'token';
const USER_KEY = 'user_name';
const fakeValue = 'qwertyuikl,mnbvcxzasdfgtyuiol.,mnb';

@Injectable({ providedIn: 'root' })
export class LoginService {
  userIsLogged = false;

  userName = localStorage.getItem(USER_KEY) || '';

  loginObserver = new Subject<boolean>();

  nameObserver = new Subject<string>();

  constructor(
    private router: Router,
    private devLogger: DevLoggerService,
    private prodLogger: ProdLoggerService,
  ) {
    this.loginObserver.subscribe((isLogged) => {
      this.userIsLogged = isLogged;
    });
    this.loginObserver.next(localStorage.getItem(TOKEN_KEY) === fakeValue);
  }

  login(name: string) {
    localStorage.setItem(TOKEN_KEY, fakeValue);
    localStorage.setItem(USER_KEY, name);
    this.loginObserver.next(true);
    this.nameObserver.next(name);
    this.router.navigateByUrl('/youtube');
    if (isDevMode()) {
      this.devLogger.logMessage();
    } else {
      this.prodLogger.logMessage();
    }
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.loginObserver.next(false);
    this.nameObserver.next('');
    this.router.navigateByUrl('/auth');
  }
}
