import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { CardFooterDirective } from './directives/card-footer.directive';
import { FilterByWordPipe } from './pipes/word-filter.pipe';
import { SortByDatePipe } from './pipes/date-sort.pipe';
import { SortByViewsPipe } from './pipes/view-sort.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { DetailedViewComponent } from './pages/detailed-view/detailed-view.component';
import { HTTPRequestService } from './services/http-request.service';
import { interceptorsProvider } from './services/interceptors';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    CardFooterDirective,
    FilterByWordPipe,
    SortByDatePipe,
    SortByViewsPipe,
    DetailedViewComponent,
  ],
  exports: [],
  imports: [
    MatCardModule,
    MatIconModule,
    SharedModule,
    CommonModule,
    YoutubeRoutingModule,
    HttpClientModule,
  ],
  providers: [HTTPRequestService, interceptorsProvider],
})
export class YoutubeModule {}
