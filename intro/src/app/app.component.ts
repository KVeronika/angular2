import { Component } from '@angular/core';

const todos = [
  {
    title: 'Learn JavaScript',
    completed: true
  },
  {
    title: 'Learn Angular 2',
    completed: false
  },
  {
    title: 'Write an application',
    completed: false
  }
];

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Angular 2Do';
  todos = todos;

  toggle(todo: any) {
    todo.completed = !todo.completed;
  }

  delete(todo: any) {
    const index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
