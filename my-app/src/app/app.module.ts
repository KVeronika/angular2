import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'users', component: UsersComponent },
  { path: 'users/:userId', component: UserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
