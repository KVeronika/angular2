import { Component } from '@angular/core';

const todos = [
  'Learn JavaScript',
  'Learn Angular 2',
  'Write an application'
];

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Angular 2Do';
  todos = todos;
}
