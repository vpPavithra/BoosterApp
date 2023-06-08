import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  textbook = {
    role: 'principal',
    class: 'Textbook Receipt'
  };
  attendance = {
    role: 'teacher',
    class: 'Class X',
    section: ['Section A', 'Section B']
  };

  role = 'teacher'

  constructor(
    private router: Router,
    private barcodeScanner: BarcodeScanner
  ) {}

  async navigateToTeacherReceipt() {
    await this.router.navigate(['./textbook-receipt']);
  }

  async dailyAttendance() {
    await this.router.navigate(['./attendance'])
  }

  openQRScanner() {
    this.barcodeScanner.scan().then(async (barcodeData) => {
      console.log('Barcode data', barcodeData);
      let key = barcodeData.text.split('?')[1].split('=')
    if (key[0] === "role") {
      if (key[1] === 'teacher') {
        await this.router.navigate(['./attendance'])
      } else if(key[1] === 'principal') {
        await this.router.navigate(['./textbook-receipt']);
      }
    }
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
