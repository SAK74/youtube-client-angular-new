import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'token';
const USER_KEY = 'user_name';
const fakeValue = 'qwertyuikl,mnbvcxzasdfgtyuiol.,mnb';

@Injectable({ providedIn: 'root' })
export class LoginService {
  userIsLogged: boolean;

  userName = '';

  constructor(private router: Router) {
    this.userIsLogged = localStorage.getItem(TOKEN_KEY) === fakeValue;
    this.userName = localStorage.getItem(USER_KEY) || '';
  }

  login(name: string) {
    localStorage.setItem(TOKEN_KEY, fakeValue);
    localStorage.setItem(USER_KEY, name);
    this.userIsLogged = true;
    this.userName = name;
    this.router.navigateByUrl('/youtube');
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.userIsLogged = false;
    this.router.navigateByUrl('/auth');
  }
}
