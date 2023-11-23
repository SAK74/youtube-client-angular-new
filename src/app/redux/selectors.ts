import { createSelector } from '@ngrx/store';
import { StoreModel } from './models/store.model';

export const selectCustomCards = (store: StoreModel) => store.customCards;

export const selectVideos = (store: StoreModel) => store.videos;

export const selectVideoById = (id: string) =>
  createSelector(selectVideos, (videos) => videos[id]);
