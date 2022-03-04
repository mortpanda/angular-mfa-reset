import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMfaModalComponent } from './config-mfa-modal.component';

describe('ConfigMfaModalComponent', () => {
  let component: ConfigMfaModalComponent;
  let fixture: ComponentFixture<ConfigMfaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigMfaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMfaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
