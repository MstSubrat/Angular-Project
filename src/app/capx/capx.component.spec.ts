import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapxComponent } from './capx.component';

describe('CapxComponent', () => {
  let component: CapxComponent;
  let fixture: ComponentFixture<CapxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
