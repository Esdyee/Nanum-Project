import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HOST } from '../configs';

interface Page {
  count: number;
  next: string;
  previous: string;
  results: Object[];
}

interface Question {
  pk: number;
  url: string;
  user: string;
  content: string;
  bookmark_count: number;
  follow_count: number;
  comment_count: number;
  created_at: string;
  modified_at: string;
}

interface QuestionDetail {
  question: Question;
  topics: string[];
}

interface Profile {
  thumbnail_image_200: string;
  name: string;
  main_credential: string;
  description: string;
  follow_relation_pk: number;
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


@Injectable()
export class FeedService {
  private headers = new HttpHeaders().set(
    'Authorization',
    `Token ${JSON.parse(JSON.parse(localStorage.currentUser)._body).token}`
  );
  private pk = JSON.parse(JSON.parse(localStorage.currentUser)._body).user.pk;

  constructor(private http: HttpClient) { }

  getFirstPage(type = 'question') { // type: question OR answer
    return this.http.get<Page>(`${HOST}/post/${type}/?ordering=-created_at`,
      { headers: this.headers });
  }

  fetchNextPage(nextURL) {
    return this.http.get<Page>(nextURL, { headers: this.headers });
  }

  getParentQuestion(url) {
    return this.http.get<QuestionDetail>(url, { headers: this.headers });
  }

  getTopicDetail(url) {
    return this.http.get<Topic>(url, { headers: this.headers });
  }

  getAuthorProfile(url) {
    return this.http.get<Profile>(url, { headers: this.headers });
  }
}
