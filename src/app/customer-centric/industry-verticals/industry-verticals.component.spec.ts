import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryVerticalsComponent } from './industry-verticals.component';

describe('IndustryVerticalsComponent', () => {
  let component: IndustryVerticalsComponent;
  let fixture: ComponentFixture<IndustryVerticalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryVerticalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryVerticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
