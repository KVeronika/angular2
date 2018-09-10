import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private randomNumber: number = 0;

  constructor() {
    this.randomNumber = Math.random();
  }

  getNumber() {
    return this.randomNumber;
  }
}
