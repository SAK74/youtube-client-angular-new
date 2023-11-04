import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { DetailedViewComponent } from './pages/detailed-view/detailed-view.component';

const routes: Route[] = [
  {
    path: '',
    component: SearchResultsComponent,
  },
  {
    path: ':id',
    component: DetailedViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
