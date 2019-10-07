import { Component, ChangeDetectorRef, OnInit, NgZone } from '@angular/core';
import { interval } from 'rxjs';
declare const Zone: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Performance?';
  someValue = 'some value';

  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef) {}

  get value() {
    return this.someValue;
  }

  ngOnInit(): void {
    interval(100).subscribe();
  }
}
