import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MISScheduleReportComponent } from './mis-schedule-report.component';

describe('MISScheduleReportComponent', () => {
  let component: MISScheduleReportComponent;
  let fixture: ComponentFixture<MISScheduleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MISScheduleReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MISScheduleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
