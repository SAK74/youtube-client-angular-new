import { DevLoggerService } from './dev-logger.service';
import { ProdLoggerService } from './prod-logger.service';

describe('Logger service testing', () => {
  beforeAll(() => {
    Object.defineProperty(window.console, 'log', {
      value: jest.fn(),
    });
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  let devService: DevLoggerService;
  let prodService: ProdLoggerService;
  beforeEach(() => {
    devService = new DevLoggerService();
    prodService = new ProdLoggerService();
  });
  it('DevService console.log should be called after call logMethod', () => {
    devService.logMessage();
    expect(console.log).toHaveBeenCalled();
  });
  it('ProdService console.log should be called after call logMethod', () => {
    prodService.logMessage();
    expect(console.log).toHaveBeenCalled();
  });
});
