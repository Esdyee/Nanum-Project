import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HOST } from '../shared/configs';


interface User {
  pk: number;
  email: string;
  name: string;
  thumbnail_image_25: string;
  thumbnail_image_50: string;
}

interface FavTopics {
  count: number;
  next: null|string;
  previous: null|number;
  results: Topic[];
}

interface Topic {
  pk: number;
  name: string;
  image: string;
  follow_relation_pk: number;
}

@Injectable()
export class MenuService {
  private headers = new HttpHeaders().set(
    'Authorization',
    `Token ${JSON.parse(localStorage.currentUser).token}`);
  public user: User = JSON.parse(localStorage.currentUser).user;

  selMainMenu = 'answer';
  selLeftMenu = 'popular';
  constructor(private http: HttpClient) { }

  getFavoriteTopics(type = 'expertise') {
    return this.http.get<FavTopics>(
      `${HOST}/user/${this.user.pk}/following-${type}/?page=1&page_size=3`,
      { headers: this.headers }
    );
  }
}
