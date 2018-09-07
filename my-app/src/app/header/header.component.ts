import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public users  = [{
    name: 'John'
  }, {
    name: 'Paul'
  }, {
    name: 'Anny'
  }];
  public isShown = true;

  constructor() {}

  ngOnInit() {
  }

  hide() {
    this.isShown = false;
  }
}
