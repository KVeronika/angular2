import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public myClass = "red";

  constructor() {
    setTimeout(() => {
      this.myClass = 'green';
      setTimeout(() => {
        this.myClass = 'blue';
      }, 2000);
    }, 2000);
  }

  ngOnInit() {
  }

}
