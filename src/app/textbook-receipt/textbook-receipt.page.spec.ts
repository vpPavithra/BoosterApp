import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextbookReceiptPage } from './textbook-receipt.page';

describe('TextbookReceiptPage', () => {
  let component: TextbookReceiptPage;
  let fixture: ComponentFixture<TextbookReceiptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TextbookReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
