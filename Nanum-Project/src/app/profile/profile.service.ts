import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';
import { HttpParams } from '@angular/common/http';


interface UserProfile {
  thumbnail_image_200?: string;
  name?: string;
  main_credential?: string;
  description?: string;
  follow_relation_pk?: number;
}


interface UserEducationCredentialPayload {
  school_id?: number;
  concentration_id?: number;
  degree_type?: string;
  graduation_year?: number;
}

interface UserEducationCredential {
  pk: number;
  url: string;
  school: {
    pk: number;
    name: string;
    image: string;
  };
  concentration: {
    pk: number,
    name: string;
    image: any;
  };
  degree_type: string;
  graduation_year: number;
  type: string;
}

interface UserEmploymentCredentialPayload {
  company_id?: number;
  position?: string;
  start_year?: number;
  end_year?: number;
  working_status?: boolean;
}

interface UserEmploymentCredential {
  pk: number;
  url: string;
  company: {
    pk: number; // 해당 주제의 pk
    name: string;
    image: string;
  };
  position: string;
  start_year: number;
  end_year: any;
  working_status: boolean;
  type: string;
}

interface UserEducation {
  pk: number;
  url: string;
  school: {
    pk: number;
    name: string;
    image: string;
  };
  concentration: {
    pk: number;
    name: string;
    image: any;
  };
  degree_type: string;
  graduation_year: number;
  type: string;
}

interface UserStats {
  answer_count: number;
  upvote_count: any;
  follower_count: number;
  following_count: 0;
}

interface TopicList {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    pk: number;
    url: string;
    creator: string;
    name: string;
    description: string;
    image: string;
    answer_count: string;
    question_count: number;
    expert_count: number;
    interest_count: number;
    created_at: string;
    modified_at: string;
  }[];
}

@Injectable()
export class ProfileService {
  HOST = 'https://siwon.me';

  user_pk = JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body).user.pk;

  userProfileImage: object;

  userProfile: UserProfile;
  userStats: UserStats;
  requestCounter = 0;

  userEmployment: UserEmploymentCredential;
  userEmploymentCredentialList: UserEmploymentCredential[];
  retrievedUserEmployment: UserEmploymentCredential;

  userEducation: UserEducationCredential;
  userEducationCredentialList: UserEducationCredential[];
  retrieveUserEducation: UserEducationCredential;

  topicList: TopicList;


  private headers = new HttpHeaders()
    .set('Authorization', `Token ${JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body).token}`);



  constructor(private http: HttpClient, private appService: AppService) {
    this.renderProfilePage();
    console.log(this.user_pk);
  }



  renderProfilePage(): object {
    return this.http.get<UserProfile>(`${this.HOST}/user/${this.user_pk}/profile/main-detail/`,
      { headers: this.headers }) // TODO: parametrize
      .subscribe(userProfile => {
        this.userProfile = userProfile;
        this.requestCounter++;
        this.getUserStats();
      });
  }



  getUserStats(): object {
    return this.http.get<UserStats>(`${this.HOST}/user/${this.user_pk}/profile/stats/`,
      { headers: this.headers })
      .subscribe(userStats => {
        this.userStats = userStats;
        this.requestCounter++;
        this.getUserEmploymentCredentialList();
        this.getUserEducationCredentialList();
      });
  }



  editProfileImage(payload) {
    console.log(payload);
    return this.http.patch<UserProfile>(`${this.HOST}/user/${this.user_pk}/profile/main-detail/`, payload,
      { headers: this.headers })
      .subscribe(response => {
        this.userProfile = response;
        console.log(this.userProfile);
      });
  }

  editProfileArticle(payload) {
    console.log(payload);
    return this.http.patch<UserProfile>(`${this.HOST}/user/${this.user_pk}/profile/main-detail/`, payload,
      { headers: this.headers })
      .subscribe(response => {
        this.userProfile = response;
      });
  }



  getUserEmploymentCredentialList(): object {
    return this.http.get<UserEmploymentCredential[]>(`${this.HOST}/user/${this.user_pk}/profile/empl-credentials/`,
      { headers: this.headers })
      .subscribe(response => {
        this.userEmploymentCredentialList = response;
        this.requestCounter++;
      });
  }

  createEmploymentCredential(payload: UserEmploymentCredentialPayload): object {
    if (Object.keys(payload).length >= 1) {
      return this.http.post<UserEmploymentCredential>(`${this.HOST}/user/${this.user_pk}/profile/empl-credentials/`, payload,
        { headers: this.headers })
        .subscribe(response => {
          this.userEmployment = response;
          this.getUserEmploymentCredentialList();
        });
    }
  }

  retrieveEmploymentCredential(): object {
    return this.http.get<UserEmploymentCredential>(`${this.HOST}/user/${this.user_pk}/profile/empl-credentials/${this.userEmployment.pk}/`,
      { headers: this.headers })
      .subscribe(response => {
        this.userEmployment = response;
        this.getUserEmploymentCredentialList();
      });
  }

  updateEmploymentCredential(payload: object): object {
    return this.http.put<UserEmploymentCredential>(`${this.HOST}/user/${this.user_pk}/profile/empl-credentials/${this.userEmployment.pk}/`, payload,
      { headers: this.headers })
      .subscribe(response => {
        this.userEmployment = response;
        this.getUserEmploymentCredentialList();
      });
  }

  deleteEmploymentCredential(pk: number): object {
    const employment_pk = this.userEmploymentCredentialList.find(resume => resume.pk == pk);
    return this.http.delete(`${this.HOST}/user/${this.user_pk}/profile/empl-credentials/${employment_pk.pk}/`,
      { headers: this.headers })
      .subscribe(response => {
        this.getUserEmploymentCredentialList();
      });
  }




  getUserEducationCredentialList(): object {
    return this.http.get<UserEducationCredential[]>(`${this.HOST}/user/${this.user_pk}/profile/edu-credentials/`,
      { headers: this.headers })
      .subscribe(response => {
        this.userEducationCredentialList = response;
        this.requestCounter++;
      });
  }

  createEducationCredential(payload): object {
    return this.http.post<UserEducationCredential>(`${this.HOST}/user/${this.user_pk}/profile/edu-credentials/`, payload,
      { headers: this.headers })
      .subscribe(response => {
        this.userEducation = response;
        this.getUserEducationCredentialList();
      });
  }

  retrieveEducationCredential(): object {
    return this.http.get<UserEducationCredential>(`${this.HOST}/user/${this.user_pk}/profile/edu-credentials/${this.userEducation.pk}/`,
      { headers: this.headers })
      .subscribe(response => {
        this.retrieveUserEducation = response;
        this.getUserEducationCredentialList();
      });
  }

  updateEducationCredential(payload): object {
    return this.http.post<UserEducationCredential>(`${this.HOST}/user/${this.user_pk}/profile/edu-credentials/${this.userEducation.pk}/`, payload,
      { headers: this.headers })
      .subscribe(response => {
        this.userEducation = response;
        this.getUserEducationCredentialList();
      });
  }

  deleteEducationCredential(pk: number): object {
    const education_pk = this.userEducationCredentialList.find(edu => edu.pk == pk);
    return this.http.delete<UserEducationCredential>(`${this.HOST}/user/${this.user_pk}/profile/edu-credentials/${education_pk.pk}/`,
      { headers: this.headers })
      .subscribe(response => {
        this.userEducation = response;
        this.getUserEducationCredentialList();
      });
  }

  getTopicList() {
    return this.http.get<TopicList>(`${this.HOST}/topic/?page_size=100`,
      { headers: this.headers })
      .subscribe(response => {
        this.topicList = response;
        console.log(response);
      });
  }
}