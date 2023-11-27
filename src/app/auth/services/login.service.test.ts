import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { DevLoggerService } from 'core/services/dev-logger.service';

describe('Login service testing', () => {
  let service: LoginService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, DevLoggerService],
    });
    service = TestBed.inject(LoginService);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Should be called logger after login method calling', () => {
    const logger = TestBed.inject(DevLoggerService);
    const loggerSpy = jest.spyOn(logger, 'logMessage');

    service.login('');
    expect(loggerSpy).toHaveBeenCalled();
    expect(service.userIsLogged).toBeTruthy();
  });

  it('Login observer should emit true after login', () => {
    service.loginObserver.subscribe((logged) => {
      expect(logged).toBeTruthy();
    });
    service.login('');
  });

  it('Name observer should emit user-name after login', () => {
    const providedVal = 'some name';
    service.nameObserver.subscribe((name) => {
      expect(name).toBe(providedVal);
    });
    service.login(providedVal);
  });

  it('Should trigerred loginObserver & nameObserver after logout', () => {
    service.nameObserver.subscribe((name) => {
      expect(name).toBe('');
    });
    service.loginObserver.subscribe((logged) => {
      expect(logged).toBeFalsy();
    });
    service.logout();
    expect(service.userIsLogged).toBeFalsy();
  });
});
