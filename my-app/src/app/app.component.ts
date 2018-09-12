import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  nameControl: FormControl;

  ngOnInit() {
    this.nameControl = new FormControl('John', [myValidator(5)], [myAsyncValidator]);

    this.nameControl.valueChanges.subscribe(value => console.log(value));
    this.nameControl.statusChanges.subscribe(status => {
      console.log(this.nameControl.errors);
      console.log(status);
    });
  }
}

function myValidator(number) {
  return function (formControl: FormControl) {
    if (formControl.value.length < number) {
      return { myValidator: { message: 'Something went wrong' } };
    }
    return null;
  }
}

function myAsyncValidator(formControl: FormControl): Observable<null | any> {
  if (formControl.value.length < 3) {
    return of({ myAsyncValidator: { message: 'Something went wrong' } });
  }
  return of(null);
}
