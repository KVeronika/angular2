import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  nameControl: FormControl;
  fullNameControl: FormGroup;
  userListControl: FormGroup;

  constructor(private _fromBuilder: FormBuilder) {}

  ngOnInit() {
    this.nameControl = new FormControl('John', [myValidator(5)], [myAsyncValidator]);

    this.nameControl.valueChanges.subscribe(value => console.log(value));
    this.nameControl.statusChanges.subscribe(status => {
      console.log(this.nameControl.errors);
      console.log(status);
    });

    this.fullNameControl = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    });

    this.fullNameControl.valueChanges.subscribe(value => console.log(value));

    // this.userListControl = new FormGroup({
    //   users: new FormArray([
    //     new FormControl('Alice'),
    //     new FormControl('Bob'),
    //     new FormControl('John')
    //   ])
    // });

    this.userListControl = this._fromBuilder.group({
      users: this._fromBuilder.array([['Alice'], ['Bob'], ['John']])
    });

    this.userListControl.valueChanges.subscribe(value => console.log(value));
  }

  removeUserControl(index: number) {
    (this.userListControl.controls['users'] as FormArray).removeAt(index);
  }

  addUserControl() {
    (this.userListControl.controls['users'] as FormArray).push(new FormControl(''));
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
