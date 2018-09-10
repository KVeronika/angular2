import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor (private _userService: UserService) {}

  getNumber() {
    return this._userService.getNumber();
  }
}
