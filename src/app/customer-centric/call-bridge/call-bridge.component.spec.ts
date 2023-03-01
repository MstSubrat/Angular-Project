import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBridgeComponent } from './call-bridge.component';

describe('CallBridgeComponent', () => {
  let component: CallBridgeComponent;
  let fixture: ComponentFixture<CallBridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallBridgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
