import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({ providedIn: 'root' })
export class ProdLoggerService extends LoggerService {
  override logMessage(): void {
    super.logMessage('[PROD]: App is running in production mode');
  }
}
