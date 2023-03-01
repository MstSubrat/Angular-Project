import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsMboComponent } from './ops-mbo.component';

describe('OpsMboComponent', () => {
  let component: OpsMboComponent;
  let fixture: ComponentFixture<OpsMboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsMboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpsMboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
