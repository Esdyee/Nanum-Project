import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
  <router-outlet></router-outlet>
  <!--<app-main-feed></app-main-feed>-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
