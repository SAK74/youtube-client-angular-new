import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_KEY = 'AIzaSyCJ5Nb9W6ec2IlV8SqjK49upIhwkBDib-s'; // to move to ENV

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      req.clone({ params: req.params.append('key', API_KEY) }),
    );
  }
}
