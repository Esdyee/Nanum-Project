import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-navigator></app-navigator>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
