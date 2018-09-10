import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  private users = [
    { name: 'John' },
    { name: 'Paul'},
    { name: 'Anna'}
  ];

  constructor(private _http: HttpClient) { }

  public getAll() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  public remove(name: string) {
    return this.users = this.users.filter(user => user.name !== name);
  }

  public add (name: string) {
    this.users.push({ name });
  }
}
