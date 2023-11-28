import { TestBed } from '@angular/core/testing';
import { LoginService, USER_KEY } from './login.service';
import { DevLoggerService } from 'core/services/dev-logger.service';

const fakeName = 'some name';

describe('Login service testing', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, DevLoggerService],
    });
    service = TestBed.inject(LoginService);
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
      },
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
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
    service.nameObserver.subscribe((name) => {
      expect(name).toBe(fakeName);
    });
    service.login(fakeName);
  });

  it('Locall storage should be called after login', () => {
    service.login(fakeName);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(USER_KEY, fakeName);
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

  it('Local storage should reset key after logout', () => {
    service.logout();
    expect(localStorage.removeItem).toHaveBeenCalledTimes(2);
  });
});
