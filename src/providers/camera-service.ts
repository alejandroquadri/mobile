import { Injectable } from '@angular/core';
import { Camera } from 'ionic-native';

@Injectable()
export class CameraService {

  constructor() {
    console.log('Hello Camera Provider');
  }

  takePicture(source){
    // con respecto al sourceType
    // Choose the returned image file's encoding. Defined in Camera.EncodingType.
    // Default is JPEG JPEG : 0 Return JPEG encoded image PNG : 1 Return PNG encoded image

    Camera.getPicture({
      quality: 95,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: source,
      allowEdit: true,
      encodingType: Camera.EncodingType.PNG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    })
    .then((imageData) => {
      return imageData;
    })
  }

}
