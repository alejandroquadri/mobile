import { Injectable } from '@angular/core';
import { Camera } from 'ionic-native';
import { ActionSheetController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

import { AuthData } from './auth-data';


@Injectable()
export class CameraService {

  public image: any
  public url: any
  // public currentUser: any

  constructor(
    public asCtrl: ActionSheetController,
    public af: AngularFire,
    public authData: AuthData
  ) {}

  getImageUrl(nombre){
    return new Promise((resolve, reject)  => {
      this.openActionSheet()
      .then((source) => {
        this.takePicture(source)
        .then((imageData) => {
          this.savePicture(nombre, imageData)
          .then((imageUrl) => {
            resolve(this.url);
          })
        })
      })
    })
  }

  openActionSheet() {
    return new Promise((resolve, reject) => {
      let actionSheet = this.asCtrl.create(
        {
        buttons: [
          {
            text: 'Sacar foto',
            icon: 'camera',
            handler: () => {
              console.log('scacar foto');
              resolve(1);
            }
          },{
            text: 'Biblioteca',
            icon: 'images',
            handler: () => {
              console.log('biblioteca');
              resolve(0);
            }
          },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
              reject('cancelado')
            }
          }
        ]
      });
      actionSheet.present();
    })
  }

  takePicture(source){
    // PHOTOLIBRARY : 0, CAMERA : 1, SAVEDPHOTOALBUM : 2
    return new Promise((resolve, reject) => {
      Camera.getPicture({
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: source,
        allowEdit: true,
        encodingType: Camera.EncodingType.PNG,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: false
      })
      .then((imageData) => {
        console.log('saco foto');
        resolve(imageData);
      }, (err) => {
        reject('error en servicio takePicture');
      })
    });
  }

  savePicture(nombre, imageData){

    return new Promise((resolve, reject) => {
      console.log('arranca savePicture', nombre);
      let imageRef = firebase.storage().ref('/images')
      console.log(imageRef);
      firebase.storage().ref('/images').child(this.authData.current.uid).child(nombre)
      .putString(imageData, 'base64', {contentType:'image/png'})
      .then((savedImage) => {
        console.log('url', savedImage.downloadURL);
        this.url = savedImage.downloadURL;
        resolve(this.url);
      }, (err) => {
        console.log('error en servicio savedPicture', err)
        reject('error en servicio savedPicture');
      })

    });

  }

}
