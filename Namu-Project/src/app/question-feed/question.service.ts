import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// for type check
import { Question } from './question';

@Injectable()
export class QuestionService {

  HOST = 'https://siwon.me';

  constructor(private http: HttpClient) { }

  // TODO: 동일 url로 method만 다르게 사용할 경우 endpoint까지 통일할까?
  getQuestionss() {
    return this.http.get(`${this.HOST}/post/question/?user=3`); // TODO: parametrize
  }

  addQuestion(payload) {
    return this.http.post<Question>(`${this.HOST}/post/question/`, payload);
  }
}
