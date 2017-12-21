import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mainComponent: string;
  constructor(private menu: MenuService) {
    this.mainComponent = menu.selMainMenu;
  }
  ngOnInit() {
  }
}
