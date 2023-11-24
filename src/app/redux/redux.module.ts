import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { customCardsReducer } from './reducers/custom-card.reducer';
import * as customCardsEffects from './effects/store-users-card.effect';
import * as videoCardsEffects from './effects/fetchVideos.effects';
import { CardsStoreService } from './services/local-store.service';
import { videoFeature } from './video-cards.feature';

@NgModule({
  imports: [
    StoreModule.forRoot({ customCards: customCardsReducer }, {}),
    EffectsModule.forRoot([customCardsEffects, videoCardsEffects]),
    StoreModule.forFeature(videoFeature),
  ],
  providers: [CardsStoreService],
})
export class ReduxModule {}
