import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { LoginService } from 'auth/services/login.service';
import { UserComponent } from './user.component';

class MockLoginService {
  userName = 'Fake name';

  userIsLogged = true;

  loginObserver = new Subject<boolean>();

  nameObserver = new Subject<string>();
}

describe('User component testing', () => {
  let fixture: ComponentFixture<UserComponent>;
  let component: UserComponent;
  let element: HTMLElement;
  describe('Simple view', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [UserComponent],
      });
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
    });

    it('Element should be created', () => {
      expect(component).toBeDefined();
      expect(element).not.toBeNull();
    });

    it('Element should contain predicated childs', () => {
      const menuBtn = fixture.debugElement.query(
        By.css('button[mat-icon-button]'),
      ).nativeElement;
      expect(menuBtn).not.toBeNull();
      const menuElem = fixture.debugElement.query(
        By.css('mat-menu'),
      ).nativeElement;
      expect(menuElem).not.toBeNull();
      const userNameElem = element.querySelector('.user-name');
      expect(userNameElem).toBeNull();
    });
  });

  describe('Testing with iteract with LoginService if user is logged', () => {
    let loginService: LoginService;
    const Mocked = new MockLoginService();

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [UserComponent],
        providers: [{ provide: LoginService, useClass: MockLoginService }],
      });
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
      loginService = TestBed.inject(LoginService);
    });

    it('SHould display initial name', () => {
      expect(component.userName).toBe(Mocked.userName);
      fixture.detectChanges();

      const userNameElement = element.querySelector('.user-name');
      expect(userNameElement).not.toBeNull();
      expect(userNameElement?.textContent).toContain(Mocked.userName);
    });

    it('Should display new name value after triggered it in LoginService', () => {
      const newName = 'New emited name';
      loginService.nameObserver.subscribe(() => {
        expect(component.userName).toBe(newName);

        fixture.detectChanges();
        const userNameElement = element.querySelector('.user-name');
        expect(userNameElement?.textContent).toBe(Mocked.userName);
      });
      loginService.nameObserver.next(newName);
    });

    it('Should have appropriate prop after user logout', () => {
      loginService.loginObserver.subscribe(() => {
        expect(component.userIsLogged).toBeFalsy();
      });
      loginService.loginObserver.next(false);
    });

    it("Shoould't display user name after user logout", () => {
      loginService.loginObserver.subscribe(() => {
        fixture.detectChanges();
        const userNameElement = element.querySelector('.user-name');
        expect(userNameElement).toBeNull();
      });
      loginService.loginObserver.next(false);
    });
  });
});
