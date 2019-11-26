import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  @Input() title;
  @Input() crumbs;

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goback(){
    this._location.back();
  }
}
