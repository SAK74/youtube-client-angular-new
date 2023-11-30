import { TestBed } from '@angular/core/testing';
import { ShowSettingsService } from './show-settings.service';

describe('Without angular testing support', () => {
  let service: ShowSettingsService;
  beforeEach(() => {
    service = new ShowSettingsService();
  });

  it('Initial value should be false', () => {
    expect(service.isShow).toBeFalsy();
  });

  it('Should change value after method call', () => {
    service.toggle();
    expect(service.isShow).toBeTruthy();
  });
});

describe('With TestBad', () => {
  let service: ShowSettingsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowSettingsService],
    });
    service = TestBed.inject(ShowSettingsService);
  });

  it('Initial value should be false', () => {
    expect(service.isShow).toBeFalsy();
  });

  it('Should change value after method call', () => {
    service.toggle();
    expect(service.isShow).toBeTruthy();
  });
});
