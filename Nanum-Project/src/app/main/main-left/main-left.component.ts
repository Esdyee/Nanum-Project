import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { ActivatedRoute } from '@angular/router';


interface Topic {
  pk: number;
  name: string;
  image: string;
  follow_relation_pk: number;
}

@Component({
  selector: 'app-main-left',
  templateUrl: './main-left.component.html',
  styleUrls: ['./main-left.component.css']
})

export class MainLeftComponent implements OnInit {
  private PARAMETERS = {
    question: 'expertise',
    answer: 'interests'
  };
  private parameter: string = this.PARAMETERS[this.route.snapshot.url.join()];
  public topics: Topic[];

  constructor(private route: ActivatedRoute, private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getFavoriteTopics(this.parameter).subscribe(
      res => { this.topics = res.results; },
      err => console.log(err)
    );
  }

  clickGeneralMenu(event) {
    this.menuService.selLeftMenu = event.target.querySelector('i').textContent;
  }

  clickTopicMenu(event) {
    this.menuService.selLeftMenu = 'topic';
  }
}
