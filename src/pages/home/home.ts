import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  showAbout = (myEvent: Event) => {
    const about = this.popoverCtrl.create(AboutPage);
    about.present({ev: myEvent});
  }

}
