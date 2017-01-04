import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { AngularFire } from 'angularfire2';

// paginas
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

// providers
import { AuthData } from '../providers/auth-data';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    private platform: Platform,
    af: AngularFire,
    public authData: AuthData,
    //public profileData: ProfileData
  ) {
    // lo de abajo chequea que este el usuario loguedo
    // caso contrario lo manda a Loguearse
    af.auth.subscribe( user => {
      if (user) {
        this.authData.setCurrent(user);
        console.log('usuario ', this.authData.current)
        this.rootPage = TabsPage;
        this.platformReady();
      } else {
        this.rootPage = LoginPage;
        this.platformReady();
      }
    });

  }

  platformReady(){
    this.platform.ready().then(() => {

      StatusBar.styleDefault();
      Splashscreen.hide();
    })
  }
}
