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

  public remove(name: string) {
    return this.users = this.users.filter(user => user.name !== name);
  }

  public add (name: string) {
    this.users.push({ name });
  }
}
