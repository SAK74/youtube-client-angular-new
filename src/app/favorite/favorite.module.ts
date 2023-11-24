import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeModule } from 'youtube/youtube.module';
import { SearchResultsComponent } from 'youtube/pages/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), YoutubeModule],
})
export class FavoriteModule {}
