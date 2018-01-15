import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';
import { HttpParams } from '@angular/common/http';

interface User {
  pk: number;
  email: string;
  name: string;
  thumbnail_image_25: string;
  thumbnail_image_50: string;
}

interface TopicRes {
  count: number;
  next: null;
  previous: null;
  results: Topic[];
}

interface Topic {
  pk: number;
  url: string;
  creator: string;
  name: string;
  description: string;
  image: string;
  answer_count: number;
  question_count: number;
  expert_count: number;
  interest_count: number;
  created_at: string;
  modified_at: string;
}

interface TopicFollow {
  topics: number[];
}

@Injectable()
export class TopicSeletService {
  HOST = 'https://siwon.me';
  topics: Topic[];
  userPk = JSON.parse(localStorage.currentUser).user.pk;


  private headers = new HttpHeaders()
  .set('Authorization', `Token ${JSON.parse(localStorage.currentUser).token}`);

  // 로그인한 사용자 정보 보관
  public user: User = JSON.parse(localStorage.currentUser).user;

  constructor(
    private http: HttpClient,
    private appService: AppService
  ) {
    this.getTopicList();
  }

  getTopicList() {
    return this.http.get<TopicRes>(`${this.HOST}/topic/?page_size=100`, { headers: this.headers })
    .subscribe(res =>
      this.topics = res.results
    );
  }

  getFollowTopicList() {
    return this.http.get<TopicRes>(`${this.HOST}/user/${this.userPk}/following-interests/?page_size=100`, { headers: this.headers });
  }

  postInterestFollow(payload) {
    return this.http.
    post<TopicFollow>(`${this.HOST}/user/topic-interest-follow-relation/`, payload, { headers: this.headers });
  }

  postExpertiseFollow(payload) {
    return this.http.
      post<TopicFollow>(`${this.HOST}/user/topic-expertise-follow-relation/`, payload, { headers: this.headers });
  }

}
