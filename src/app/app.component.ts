import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
declare const Zone: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Zone.js is broken with RxJS?';
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
