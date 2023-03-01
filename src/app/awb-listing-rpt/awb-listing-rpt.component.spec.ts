import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwbListingRptComponent } from './awb-listing-rpt.component';

describe('AwbListingRptComponent', () => {
  let component: AwbListingRptComponent;
  let fixture: ComponentFixture<AwbListingRptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwbListingRptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwbListingRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
