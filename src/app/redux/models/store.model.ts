import { ItemModel } from 'youtube/models/search-item.model';

export interface CustomCard {
  title: string;
  description?: string;
  img: string;
  video: string;
  creationDate: string;
  tags: string[];
  id: string;
}

export interface StoreModel {
  customCards: CustomCard[];
  videos: ItemModel[];
}
