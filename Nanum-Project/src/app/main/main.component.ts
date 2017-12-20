import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-main',
  // templateUrl: './main.component.html',
  template: `
  <app-navigator></app-navigator>
  <!--TODO: component 분리(지섭님께 확인받아야함)-->
  <div class="container_12">
    <!--<nav class="nav">
      <div class="grid_2 prefix_4">
        <a href="#"><span>읽기</span></a>
      </div>
      <div class="grid_2 suffix_4">
        <a href="#"><span>답변하기</span></a>
      </div>
    </nav>-->
  </div>

  <!--main: 큰 레이아웃(2:8:2 그리드)만 공유가능-->
  <div class="main">

    <div class="container_12">
      <!--좌측 메뉴-->
      <div class="grid_2">
        <app-main-left></app-main-left>
      </div>

      <!--메인 컴포넌트-->
      <div class="grid_8">
        <!--<app-answers *ngIf="mainComponent=='answer'"></app-answers>
        <app-question *ngIf="mainComponent=='question'"></app-question>-->
        <router-outlet></router-outlet>
      </div>
      <!--우측 메뉴를 위해 남겨둔 공간-->
      <div class="grid_2">
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mainComponent: string;
  constructor(private menu: MenuService) {
    this.mainComponent = menu.selMainMenu;
  }
  ngOnInit() {
    console.log(this.mainComponent);
  }
}
