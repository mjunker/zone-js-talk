import { Component, ChangeDetectorRef, OnInit, NgZone } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
declare const Zone: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zone-js-talk';
  value = 'initial value';

  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    window.addEventListener(
      'mousemove',
      event => {
        this.value = event.x + '/' + event.y;
      },
      true
    );

    window.addEventListener(
      'mousedown',
      event => {
        this.value = 'mouse clicked ' + event.x + '/' + event.y;
      },
      true
    );
  }
}
