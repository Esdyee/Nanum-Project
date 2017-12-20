import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuService } from '../../service/menu.service';

interface Topic {
  pk: number;
  name: string;
}

@Component({
  selector: 'app-main-left',
  // templateUrl: './main-left.component.html',
  template: `
  <div class="sidebar">
  <h1 class="sidebar_header mat-h1">피드</h1>
  <div class="sidebar_lists">
    <ul class="sidebar_filters mat-caption" (click)="clickGeneralMenu($event)">
      <li><a href="#" [routerLink]="[]"><i class="material-icons">trending_up</i>최신 글</a></li>
      <li><a href="#" [routerLink]="[]"><i class="material-icons">bookmark_border</i>북마크한 답변</a></li>
      <li><a href="#" [routerLink]="[]"><i class="material-icons">whatshot</i>인기글</a></li>
    </ul>
    <div class="sidebar_edit mat-caption">
      <span><i class="material-icons">folder_special</i>내 토픽</span>
    </div>
    <ul class="sidebar_topics mat-caption" (click)="clickTopicMenu($event)">
      <li *ngFor="let topic of topics; let i = index"><a href="#" >{{topic.name}}</a></li>
    </ul>
  </div>
</div>
  `,
  styleUrls: ['./main-left.component.css']
})
export class MainLeftComponent implements OnInit {
  topics: Topic[];
  constructor(private menu: MenuService, private http: HttpClient) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    if (this.menu.selMainMenu === 'Answer') {
      this.topics = [
        { pk: 4, name: 'angular' },
        { pk: 5, name: 'react' },
        { pk: 6, name: 'vue.js' }
      ];
    } else {
      this.topics = [
        { pk: 1, name: 'HTML' },
        { pk: 2, name: 'CSS' },
        { pk: 3, name: 'JavaScript' }
      ];
    }
  }

  clickGeneralMenu(event) {
    console.log(event.target.querySelector('i').textContent);
    this.menu.selLeftMenu = event.target.querySelector('i').textContent;
  }

  clickTopicMenu(event) {

  }
}
