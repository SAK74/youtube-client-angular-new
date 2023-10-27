import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { CardFooterDirective } from 'search/directives/card-footer.directive';
import { SortByDatePipe } from 'search/pipes/date-sort.pipe';
import { FormsModule } from '@angular/forms';
import { FilterByWordPipe } from 'search/pipes/word-filter.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SearchResultsComponent } from './search/components/search-results/search-results.component';
import { SearchItemComponent } from './search/components/search-item/search-item.component';
import { SettingsComponent } from './core/header/components/settings/settings.component';
import { UserComponent } from './core/header/components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SettingsComponent,
    UserComponent,
    CardFooterDirective,
    SortByDatePipe,
    FilterByWordPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
