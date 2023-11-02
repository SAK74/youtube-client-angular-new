import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'not-found.component';

const routes: Routes = [
  {
    path: 'youtube',
    loadChildren: () => import('youtube/youtube.module').then((m) => m.YoutubeModule),
  },

  {
    path: 'auth',
    loadChildren: async () => (await import('auth/auth.module')).AuthModule,
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
