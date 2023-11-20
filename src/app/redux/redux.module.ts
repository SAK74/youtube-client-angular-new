import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreModel } from './models/store.model';
import { customCardsReducer } from './reducers/custom-card.reducer';
import { videoReducer } from './reducers/videos.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot<StoreModel>(
      { customCards: customCardsReducer, videos: videoReducer },
      {}
    ),
  ],
})
export class ReduxModule {}
