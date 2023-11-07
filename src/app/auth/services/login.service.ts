import { Injectable, isDevMode, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DevLoggerService } from 'core/services/dev-logger.service';
import { ProdLoggerService } from 'core/services/prod-logger.service';

const TOKEN_KEY = 'token';
const USER_KEY = 'user_name';
const fakeValue = 'qwertyuikl,mnbvcxzasdfgtyuiol.,mnb';

@Injectable({ providedIn: 'root' })
export class LoginService {
  userIsLogged: boolean = localStorage.getItem(TOKEN_KEY) === fakeValue;

  userName = localStorage.getItem(USER_KEY) || '';

  private router = inject(Router);

  private devLogger = inject(DevLoggerService);

  private prodLogger = inject(ProdLoggerService);

  login(name: string) {
    localStorage.setItem(TOKEN_KEY, fakeValue);
    localStorage.setItem(USER_KEY, name);
    this.userIsLogged = true;
    this.userName = name;
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
    this.userIsLogged = false;
    this.router.navigateByUrl('/auth');
  }
}
