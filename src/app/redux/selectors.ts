import { StoreModel } from './models/store.model';

export const selectCustomCards = (store: StoreModel) => store.customCards;

export const selectVideos = (store: StoreModel) => store.videos;
