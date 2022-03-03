import { Injectable } from '@angular/core';
import { OktaConfigService } from "./okta-config.service";
import { OktaSDKAuthService } from './okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js';



@Injectable({
  providedIn: 'root'
})
export class OktaResetMfaService {
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
strMFAResetStatus;
  constructor(
    public OktaConfigService: OktaConfigService,
    public OktaSDKAuthService: OktaSDKAuthService,
  ) { }

  async ResetMFA(url, token) {
    
    const thisFetch = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
      },

    })
      .then(response => response.json())
    this.strMFAResetStatus = await thisFetch;
    // console.log('Getting me using service')
    console.log(this.strMFAResetStatus);
    
  }


}
