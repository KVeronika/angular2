import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Object;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.getPosts().subscribe( data => this.posts$ = data );
  }

}
