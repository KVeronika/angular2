import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public users;

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.users = this._userService.getAll();
  }

}
