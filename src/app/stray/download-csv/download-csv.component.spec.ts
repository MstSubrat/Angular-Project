import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCsvComponent } from './download-csv.component';

describe('DownloadCsvComponent', () => {
  let component: DownloadCsvComponent;
  let fixture: ComponentFixture<DownloadCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
