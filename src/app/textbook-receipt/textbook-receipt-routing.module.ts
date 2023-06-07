import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextbookReceiptPage } from './textbook-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: TextbookReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextbookReceiptPageRoutingModule {}
