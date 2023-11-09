import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class HTTPRequestService {
  request = inject(HttpClient);

  getSearch() {
    return this.request.get('search', {});
  }
}
