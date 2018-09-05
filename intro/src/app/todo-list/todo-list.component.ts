import { Component, Input } from '@angular/core';

import { Todo } from '../shared/todo';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {
    @Input() todos: Todo[];

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    delete(todo: Todo) {
        const index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}