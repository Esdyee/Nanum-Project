import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Question {
  content: string;
  topics: number[];
}

interface Questions {
  count: number;
  next: string;
  previous: string;
  results: Object[];
}

interface Answer {
  question: number;
  content: string;
  content_html: string;
  published: boolean;
}

interface Answers {
  count: number;
  next: string;
  previous: string;
  results: Object[];
}

@Injectable()
export class QuestionService {

  private HOST = 'https://siwon.me';
  private headers = new HttpHeaders()
    .set('Authorization', `Token ${JSON.parse(localStorage.currentUser).token}`);

  constructor(private http: HttpClient) { }


  // TODO: 동일 url로 method만 다르게 사용할 경우 endpoint까지 통일할까?
  getQuestions(page) {
    return this.http.get<Questions>(`${this.HOST}/post/question/?page=${page}`,
      { headers: this.headers }); // TODO: parametrize
  }

  addQuestion(payload: Question) {
    return this.http.post<Question>(`${this.HOST}/post/question/`, payload,
      { headers: this.headers});
  }

  getAnswers(page) {
    return this.http.get<Answers>(`${this.HOST}/post/answer/?ordering=-created_at&page=${page}`,
      { headers: this.headers });
  }

  addAnswer(payload: Answer) {
    return this.http.post(`${this.HOST}/post/answer/`, payload,
      {headers: this.headers});
  }
}
