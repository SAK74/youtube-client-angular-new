import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { UserComponent } from './header/components/user/user.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './header/components/settings/settings.component';

@NgModule({
  declarations: [HeaderComponent, UserComponent],
  exports: [HeaderComponent],
  imports: [
    SharedModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    SettingsComponent,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class CoreModule {}
