import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

@Injectable()
export class AttachUrlInterceptor implements HttpInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!req.url.startsWith('search') && !req.url.startsWith('videos')) {
      return next.handle(req);
    }
    return next.handle(req.clone({ url: BASE_URL + req.url }));
  }
}
