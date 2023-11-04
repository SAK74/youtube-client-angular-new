import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({ providedIn: 'root' })
export class DevLoggerService extends LoggerService {
  override logMessage(): void {
    super.logMessage('[DEV]: App is running in development mode');
  }
}
