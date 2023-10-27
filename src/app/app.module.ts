import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { CardFooterDirective } from 'search/directives/card-footer.directive';
import { SortByDatePipe } from 'search/pipes/sort.pipes';
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
  ],
  imports: [BrowserModule, AppRoutingModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
