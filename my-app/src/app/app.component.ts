import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  trafficControl: FormControl;

  ngOnInit() {
    this.trafficControl = new FormControl();

    this.trafficControl.valueChanges.subscribe((value) => console.log(value));
  }
}