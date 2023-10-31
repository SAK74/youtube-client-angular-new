import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  ],
})
export class CoreModule {}
