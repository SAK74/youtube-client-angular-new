import { createSelector } from '@ngrx/store';
import { StoreModel } from './models/store.model';
import { selectVideosState } from './video-cards.feature';

export const selectCustomCards = (store: StoreModel) => store.customCards;
export const selectCustomCardsArray = createSelector(
  selectCustomCards,
  (cards) => Object.values(cards),
);

export const selectVideoById = (id: string) => createSelector(selectVideosState, (videos) => videos[id]);

export const selectVideoListIdArray = createSelector(
  selectVideosState,
  (videos) => Object.keys(videos),
);

export const selectFavoritesIdArray = createSelector(
  selectVideosState,
  (videos) => Object.values(videos)
    .filter((video) => video.favorite)
    .map((video) => video.id),
);
