import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'core/guards/auth.guard';
import { NotFoundComponent } from 'not-found.component';

const routes: Routes = [
  {
    path: 'youtube',
    loadChildren: () => import('youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [authGuard],
  },

  {
    path: 'auth',
    loadChildren: async () => (await import('auth/auth.module')).AuthModule,
  },
  {
    path: 'admin',
    loadChildren: async () => (await import('admin/admin.module')).AdminModule,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'youtube',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
