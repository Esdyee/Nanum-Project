import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuService } from '../../service/menu.service';
import { AppService } from '../../app.service';

interface Topic {
  topics: {
    pk: number;
    name: string;
  };
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
      <li *ngFor="let topic of topics; let i = index" [attr.data-id]="topic.topics.pk">
        <a href="#" [routerLink]="[]">{{topic.topics.name}}</a>
      </li>
    </ul>
  </div>
</div>
  `,
  styleUrls: ['./main-left.component.css']
})
export class MainLeftComponent implements OnInit {
  topics: Topic[];
  private headers = new HttpHeaders()
    .set('Authorization', `Token ${JSON.parse(localStorage.getItem('currentUser')).token}`);

  constructor(private menu: MenuService, private http: HttpClient, private path: AppService) {
   }

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    // question과 answer를 분기 해야 하지만 answer관련해서 api가 존재하지 않음
    this.http.get(this.path.api_path + '/post/question/filter/', { headers: this.headers })
      .subscribe((res: Topic[]) => { this.topics = res; });
  }

  clickGeneralMenu(event) {
    this.menu.selLeftMenu = event.target.querySelector('i').textContent;
  }

  clickTopicMenu(event) {
    this.menu.selLeftMenu = 'topic';
  }
}
