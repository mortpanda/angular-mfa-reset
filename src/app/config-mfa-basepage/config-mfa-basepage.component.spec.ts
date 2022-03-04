import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMfaBasepageComponent } from './config-mfa-basepage.component';

describe('ConfigMfaBasepageComponent', () => {
  let component: ConfigMfaBasepageComponent;
  let fixture: ComponentFixture<ConfigMfaBasepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigMfaBasepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMfaBasepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
