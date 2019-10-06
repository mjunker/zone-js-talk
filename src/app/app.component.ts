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
  currentZone$;

  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.currentZone$ = new Observable(subscriber =>
        subscriber.next(Zone.current.name)
      );
    });
  }
}
