import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { AngularFire } from 'angularfire2';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, af: AngularFire) {

    // lo de abajo chequea que este el usuario loguedo
    // caso contrario lo manda a Loguearse
    af.auth.subscribe( user => {
      if (user) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
