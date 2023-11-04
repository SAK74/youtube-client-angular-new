import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'auth/services/login.service';

@Component({
  selector: 'auth-component',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  private loginService = inject(LoginService);

  login(form: NgForm) {
    if (form.valid) {
      this.loginService.login(form.controls['login'].value);
    }
  }
}
