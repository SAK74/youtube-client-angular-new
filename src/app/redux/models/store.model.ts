import { ItemModel } from 'youtube/models/search-item.model';

export interface CustomCard {
  title: string;
  description: string;
  img: string;
  video: string;
  creationDate: string;
  tags: string[];
  id: string;
}

export interface ItemWithFavoriteModel extends ItemModel {
  favorite: boolean;
}

export interface StoreModel {
  customCards: { [id: string]: CustomCard };
  videos: { [id: string]: ItemWithFavoriteModel };
}
