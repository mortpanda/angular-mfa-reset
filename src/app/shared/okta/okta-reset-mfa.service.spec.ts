import { TestBed } from '@angular/core/testing';

import { OktaResetMfaService } from './okta-reset-mfa.service';

describe('OktaResetMfaService', () => {
  let service: OktaResetMfaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OktaResetMfaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
