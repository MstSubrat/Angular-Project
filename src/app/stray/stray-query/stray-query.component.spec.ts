import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrayQueryComponent } from './stray-query.component';

describe('StrayQueryComponent', () => {
  let component: StrayQueryComponent;
  let fixture: ComponentFixture<StrayQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrayQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrayQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
