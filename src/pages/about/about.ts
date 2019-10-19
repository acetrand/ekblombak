import { ViewController } from "ionic-angular";
import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <ion-list>
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class AboutPage implements OnInit {
  constructor(public viewCtrl: ViewController) {}

  ngOnInit() {
      console.log('ge');
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
