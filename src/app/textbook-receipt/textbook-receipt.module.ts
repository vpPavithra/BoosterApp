import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextbookReceiptPageRoutingModule } from './textbook-receipt-routing.module';

import { TextbookReceiptPage } from './textbook-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextbookReceiptPageRoutingModule
  ],
  declarations: [TextbookReceiptPage]
})
export class TextbookReceiptPageModule {}
