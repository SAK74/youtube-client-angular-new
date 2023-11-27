import { DevLoggerService } from './dev-logger.service';

describe('Logger service testing', () => {
  beforeAll(() => {
    Object.defineProperty(window.console, 'log', {
      value: jest.fn(),
    });
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  let service: DevLoggerService;
  beforeEach(() => {
    service = new DevLoggerService();
  });
  it('console.log should be called after call logMethod', () => {
    service.logMessage();
    expect(console.log).toHaveBeenCalled();
  });
});
