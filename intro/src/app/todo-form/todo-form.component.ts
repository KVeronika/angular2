import { Component } from '@angular/core';

@Component({
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {
  newTodoTitle: string = '';

  create() {
  }
}