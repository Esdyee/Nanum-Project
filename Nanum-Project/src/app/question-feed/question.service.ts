import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// for type check
import { Question } from './question';

@Injectable()
export class QuestionService {

  HOST = 'https://siwon.me';
  private headers = new HttpHeaders()
    .set('Authorization', `Token ${JSON.parse(localStorage.currentUser).token}`);

  constructor(private http: HttpClient) { }


  // TODO: 동일 url로 method만 다르게 사용할 경우 endpoint까지 통일할까?
  getFeed(page) {
    return this.http.get(`${this.HOST}/post/question/?page=${page}`,
      { headers: this.headers }); // TODO: parametrize
  }

  addQuestion(payload: Question) {
    return this.http.post<Question>(`${this.HOST}/post/question/`, payload,
      { headers: this.headers});
  }
}
