import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

// import { ReflectiveInjector, Injector } from '@angular/core';

// const injector: Injector = ReflectiveInjector.resolveAndCreate([
//   { provide: UserService, useClass: UserService }
// ]);
// const userService = injector.get(UserService);


// for values, not classes
// const API_BASE_URL = 'api.mysite.com';
// const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService
    // // UserService
    // // for values, not classes
    // { provide: API_BASE_URL, useValue: 'api.mysite.com' },
    // // for creating specific instances
    // { provide: UserService, useFactory: function() {
    //   // there can be some creation logic
    //   return new UserService();
    // }, deps: ['AdminService']}, 
    // // e.g. if we want to create alias
    // { provide: UserService, useExisting: UserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
