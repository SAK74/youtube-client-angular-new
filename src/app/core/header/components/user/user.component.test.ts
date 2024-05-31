import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { LoginService } from 'auth/services/login.service';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { UserComponent } from './user.component';

class MockLoginService {
  userName = 'Fake name';

  userIsLogged = true;

  loginObserver = new Subject<boolean>();

  nameObserver = new Subject<string>();

  logout = jest.fn();
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

    it('SHould call appropriate method after logout click', () => {
      // let logoutBtn: HTMLElement | null;
      const logoutBtn: HTMLElement | null = element.querySelector('.logout');
      expect(logoutBtn).not.toBeNull();
      logoutBtn?.click();
      expect(loginService.logout).toHaveBeenCalled();
    });
  });

  describe('Navigation testing', () => {
    let harnes: RouterTestingHarness;
    let router: Router;
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [UserComponent],
        providers: [provideRouter([{ path: '**', component: UserComponent }])],
      }).compileComponents();
      harnes = await RouterTestingHarness.create();
      router = TestBed.inject(Router);
      // fixture = TestBed.createComponent(UserComponent);
      // element = fixture.debugElement.nativeElement;
      component = await harnes.navigateByUrl('/', UserComponent);
    });

    it('Should navigate to admin page', () => {
      console.log(harnes.routeNativeElement);
      // const toAdminBtn = component.element.querySelector('.toadmin');
      // expect(toAdminBtn).not.toBeNull();
      component.goToAdmin();
      expect(router.url).toBe('/admin');
    });
  });
});
