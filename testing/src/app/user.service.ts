import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IUser {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getOne(userId: number): Observable<IUser> {
    return this._http.get<IUser>(`/users/${userId}`);
  }

  getAll(): Observable<IUser[]> {
    return this._http.get<IUser[]>('/users');
  }
}
