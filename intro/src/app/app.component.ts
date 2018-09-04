import { Component } from '@angular/core';

class Todo {
  constructor(public title: string,
              public completed: boolean = false) {}
}

const todos: Todo[] = [
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
  title: string = 'Angular 2Do';
  todos: Todo[] = todos;
  newTodoTitle: string = '';

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  create() {
    let todo: Todo = new Todo(this.newTodoTitle);

    this.todos.push(todo);
    this.newTodoTitle = '';
  }
}
