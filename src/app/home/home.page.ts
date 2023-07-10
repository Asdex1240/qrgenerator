import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  qrData = ''

  downloadQR(){
    const canvas = document.getElementById('qr')?.querySelector('canvas');
    if(canvas){
      const dataURL = canvas?.toDataURL('image/png');
      const link = document.createElement('a')
      link.href = dataURL
      link.download = 'qr_code.png'
      link.click()
    }
  }
}
