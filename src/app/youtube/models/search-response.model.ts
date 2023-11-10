import { SourceModel } from './search-item.model';

export interface ResponseModel<T = SourceModel> {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: T[];
}
