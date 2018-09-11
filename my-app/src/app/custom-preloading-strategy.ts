import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, tap } from 'rxjs/operators';

export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (route.data && route.data['nopreload']) {
            return of(null);
        }

        return of(true).pipe(
            delay(3000),
            tap(_ => fn())
        );
    }
}