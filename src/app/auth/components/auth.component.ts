import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'auth/services/login.service';
import { passwordValidator } from 'auth/services/password-validator';

@Component({
  selector: 'auth-component',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  private loginService = inject(LoginService);

  private fb = inject(NonNullableFormBuilder);

  loginForm = this.fb.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordValidator]],
  });

  getError(name: keyof typeof this.loginForm.controls) {
    const field = this.loginForm.controls[name];
    switch (true) {
      case field.hasError('required'):
        return `${name.replace(/\b\w/, (l) => l.toUpperCase())} is required!`;
      case field.hasError('email'):
        return `The ${name} format is invalid`;
      case field.hasError('wrongFormat'):
        return field.getError('wrongFormat');
      default:
        return null;
    }
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.controls.login.value);
    }
  }
}
