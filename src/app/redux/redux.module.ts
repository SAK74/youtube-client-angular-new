import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModel } from './models/store.model';
import { customCardsReducer } from './reducers/custom-card.reducer';
import { videoReducer } from './reducers/videos.reducer';
import * as customCardsEffects from './effects/store-users-card.effect';
import * as videoCardsEffects from './effects/fetchVideos.effects';
import { CardsStoreService } from './services/local-store.service';

@NgModule({
  imports: [
    StoreModule.forRoot<StoreModel>(
      { customCards: customCardsReducer, videos: videoReducer },
      {}
    ),
    EffectsModule.forRoot([customCardsEffects, videoCardsEffects]),
  ],
  providers: [CardsStoreService],
})
export class ReduxModule {}
