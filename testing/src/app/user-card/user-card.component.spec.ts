import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserCardComponent } from './user-card.component';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let userService: UserService;
  let spy: jasmine.Spy;
  let mockUser;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ UserCardComponent ],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    mockUser = { name: 'John' };
    spy = spyOn(userService, 'getOne').and.returnValue(of(mockUser));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService', () => {
   component.someMethod();
   expect(spy).toHaveBeenCalled();
  });

  it('should set user', () => {
    component.someMethod();
    expect(component.user).toEqual(mockUser);
  });
});
