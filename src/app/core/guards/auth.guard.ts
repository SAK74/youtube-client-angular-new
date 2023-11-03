import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'auth/services/login.service';

export const authGuard: CanActivateFn = () => {
  const isLogged = inject(LoginService).userIsLogged;
  if (isLogged) {
    return true;
  }
  inject(Router).navigateByUrl('/auth');
  return false;
};
