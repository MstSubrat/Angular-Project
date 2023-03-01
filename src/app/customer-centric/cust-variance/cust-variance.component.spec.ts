import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustVarianceComponent } from './cust-variance.component';

describe('CustVarianceComponent', () => {
  let component: CustVarianceComponent;
  let fixture: ComponentFixture<CustVarianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustVarianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustVarianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
