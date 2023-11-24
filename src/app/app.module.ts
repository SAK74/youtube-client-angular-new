import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'core/core.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReduxModule } from 'redux/redux.module';
import { interceptorsProvider } from 'youtube/services/interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    RouterModule,
    BrowserAnimationsModule,
    ReduxModule,
  ],
  providers: [interceptorsProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
