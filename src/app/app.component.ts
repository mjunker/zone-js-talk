import { Component, ChangeDetectorRef, OnInit, NgZone } from '@angular/core';
import { of, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zone-js-talk';
  someValue = 'some value';
  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef) {}

  get value() {
    console.log('getting value');
    return this.someValue;
  }

  ngOnInit(): void {
    interval(100).subscribe();
  }
}
