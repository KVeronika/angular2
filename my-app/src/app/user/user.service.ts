export class UserService {
  private users = [
    { name: 'John' },
    { name: 'Paul'},
    { name: 'Anna'}
  ];

  constructor() { }

  public getAll() {
    return this.users;
  }
}
