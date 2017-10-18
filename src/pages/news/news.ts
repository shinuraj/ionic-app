import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  iniNewsTab : string = "top";
  constructor(public navCtrl: NavController) {

  }

}
