import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { UserResolveService } from './user-resolve.service';
import { AuthService } from './auth.service';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'admin',
/*     data: {
      nopreload: false
    }, */
    loadChildren: './admin/admin.module#AdminModule'},
  { path: 'users',
    canActivate: [ AuthGuard ],
    resolve: {
      user: UserResolveService
    },
    data: {
      title: 'Some title',
      anotherParam: 'Another'
    },
    component: UsersComponent
  },
  { path: 'users/:userId', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })
  ],
  providers: [ AuthGuard, AuthService, UserResolveService, CustomPreloadingStrategy ],
  bootstrap: [AppComponent]
})
export class AppModule { }
