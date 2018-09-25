import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;

  constructor(private _data: DataService,
    private _route: ActivatedRoute) {
      this._route.params.subscribe( params => this.user$ = params.id );
    }

  ngOnInit() {
    this._data.getUser(this.user$).subscribe( data => this.user$ = data);
  }

}
