import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
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

    return { todos }
  }
}
