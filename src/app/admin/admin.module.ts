import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'shared/shared.module';
import { AdminPageComponent } from './pages/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
  ],
  declarations: [AdminPageComponent],
})
export class AdminModule {}
