import { Component, NgZone } from '@angular/core';
declare const Zone: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zone-js-talk';

  constructor(private ngZone: NgZone) {}
}
