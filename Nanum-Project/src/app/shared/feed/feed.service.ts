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

interface Answer {
  question: number;
  content: string;
  content_html: string;
  published: boolean;
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

interface User {
  pk: number;
  email: string;
  name: string;
  thumbnail_image_25: string;
  thumbnail_image_50: string;
}

interface Comment {
  question?: number;
  answer?: number;
  parent: number|null;
  content: string;
}

@Injectable()
export class FeedService {
  // 공용 헤더
  private headers = new HttpHeaders().set('Authorization', `Token ${JSON.parse(localStorage.currentUser).token
    }`);
  // 로그인한 사용자 정보 보관
  public user: User = JSON.parse(localStorage.currentUser).user;

  constructor(private http: HttpClient) { }

  // type = question | answer | comment
  getFirstPage(type = 'answer', urlParameters: string[] = ['ordering=-created_at']) {
    return this.http.get<Page>(`${HOST}/post/${type === 'topic' ? 'question' : type }/?${urlParameters.join('&')}`,
      { headers: this.headers });
  }

  // question, answer, comment 공통
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

  postComment(payload) {
    return this.http.post<Comment>(`${HOST}/post/comment/`, payload, { headers: this.headers });
  }

  postAnswer(payload) {
    return this.http.post<Answer>(`${HOST}/post/answer/`, payload, { headers: this.headers });
  }
}
