import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
            {
                id: 1,
                title: 'Learn JavaScript',
                completed: true
            },
            {
                id: 2,
                title: 'Learn Angular 2',
                completed: false
            },
            {
                id: 3,
                title: 'Write an application',
                completed: false
            }
        ];

        return { todos };
    }
}
