import { Component, NgZone } from '@angular/core';
declare const Zone: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgZone';

  constructor(private ngZone: NgZone) {
    console.log('current zone:', Zone.current.name);
  }
}
