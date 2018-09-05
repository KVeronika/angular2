import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Todo } from './todo';

@Injectable()
export class TodoService {
    private apiUrl = 'api/todos';

    constructor(private http: Http) { }

    getTodos(): Observable<Todo[]> {
        return this.http
            .get(this.apiUrl)
            .pipe(
                map(res => res.json()),
                catchError(this.handleError)
            );
    }

    createTodo(title: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        let todo = new Todo(title);

        return this.http.post(this.apiUrl, todo, options)
            .pipe(
                map(res => res.json()),
                catchError(this.handleError)
            );
    }

    deleteTodo(todo: Todo) {
        let headers = new Headers({ 'Content-Type': 'application/json '});
        let options = new RequestOptions({ headers });
        let url = `${this.apiUrl}/${todo.id}`;

        return this.http.delete(url, options)
            .pipe(
                catchError(this.handleError)
            );
    }

    toggleTodo(todo: Todo) {
        let headers = new Headers({ 'Content-Type': 'application/json '});
        let options = new RequestOptions({ headers });
        let url = `${this.apiUrl}/${todo.id}`;

        return this.http.put(url, todo, options)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
        console.log('Error was thrown ', error);

        return Observable.throw(error.message || error);
    }
}