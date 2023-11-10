import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClassProvider } from '@angular/core';
import { AttachUrlInterceptor } from './attach-url.interceptor';
import { AuthInterceptor } from './auth.interceptor';

export const interceptorsProvider: ClassProvider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AttachUrlInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
