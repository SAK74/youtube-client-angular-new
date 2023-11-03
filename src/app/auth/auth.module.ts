import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'shared/shared.module';
import { AuthComponent } from './components/auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
  ],
  declarations: [AuthComponent],
})
export class AuthModule {}
