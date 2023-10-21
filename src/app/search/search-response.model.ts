import { ItemType } from './search-item.model';

export interface ResponseType {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ItemType[];
}
