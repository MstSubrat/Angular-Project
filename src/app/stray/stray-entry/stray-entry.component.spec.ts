import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrayEntryComponent } from './stray-entry.component';

describe('StrayEntryComponent', () => {
  let component: StrayEntryComponent;
  let fixture: ComponentFixture<StrayEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrayEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrayEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
