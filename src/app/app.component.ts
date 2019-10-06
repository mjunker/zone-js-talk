import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zone-js-talk';
  value = 'not yet clicked';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  updateValue() {
    this.value = 'button was clicked';
    this.changeDetectorRef.detectChanges();
  }
}
