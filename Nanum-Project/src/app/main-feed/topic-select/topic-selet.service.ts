import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../../app.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class TopicSeletService {

  constructor(private http: HttpClient, private appService: AppService) { }

  getTopicList() {
    // return this.http.get<Topic>()
  }

}
