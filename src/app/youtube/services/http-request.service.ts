import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ItemModel } from 'youtube/models/search-item.model';
import { ResponseModel } from 'youtube/models/search-response.model';

@Injectable({ providedIn: 'root' })
export class HTTPRequestService {
  request = inject(HttpClient);

  getSearch(search: string, perPage?: number) {
    return this.request.get<ResponseModel>('search', {
      params: {
        type: 'video',
        part: 'snippet',
        maxResults: perPage || 10,
        q: search,
      },
    });
  }

  getVideo(id: string) {
    return this.request.get<ResponseModel<ItemModel>>('videos', {
      params: {
        id,
        part: 'snippet,statistics',
      },
    });
  }
}
