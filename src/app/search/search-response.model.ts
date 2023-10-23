import { ItemModel } from './search-item.model';

export interface ResponseModel {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ItemModel[];
}
