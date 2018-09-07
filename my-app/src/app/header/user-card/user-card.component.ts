import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user;
  @Output() userSelected: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('construcror:', this.user);
  }

  ngOnInit() {
    console.log('construcror:', this.user);
  }

  selectUser() {
    this.userSelected.emit();
  }
}
