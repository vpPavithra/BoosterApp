import { Component, OnInit } from '@angular/core';

interface Texbook {
  class: string,
  subject: string,
  count?: number
}

@Component({
  selector: 'app-textbook-receipt',
  templateUrl: './textbook-receipt.page.html',
  styleUrls: ['./textbook-receipt.page.scss'],
})
export class TextbookReceiptPage implements OnInit {
  textbookDetails: Array<Texbook>
  constructor() {
    console.log('teacher receipt')
    this.textbookDetails = [
      {
        class: "1",
        subject: "English",
      },
      {
        class: "1",
        subject: "EVS",
      },
      {
        class: "3",
        subject: "Mathematics",
      },
      {
        class: "6",
        subject: "General Science",
      }
    ]
  }

  ngOnInit() {
  }

  saveData() {
    console.log(this.textbookDetails);
  }

}
