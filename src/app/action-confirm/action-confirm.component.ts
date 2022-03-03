import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaConfigService } from "app/shared/okta/okta-config.service";
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaGetUserService } from 'app/shared/okta/okta-get-user.service';
import {OktaResetMfaService} from 'app/shared/okta/okta-reset-mfa.service';

@Component({
  selector: 'app-action-confirm',
  templateUrl: './action-confirm.component.html',
  styleUrls: ['./action-confirm.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActionConfirmComponent implements OnInit {
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  constructor(
    public OktaConfigService:OktaConfigService,
    public OktaSDKAuthService: OktaSDKAuthService,
    public OktaGetUserService: OktaGetUserService,
    public OktaResetMfaService:OktaResetMfaService,
  ) { }

  ngOnInit(): void {
  }

  resetCancel(){
    window.location.replace(this.OktaConfigService.strRedirectURL)
  }

  strUserSession;
  async startMFAReset(){
    this.strUserSession = await this.authService.session.exists()
      .then(function (exists) {
        if (exists) {
          // logged in
          //console.log('Session to Okta : ' + exists);
          return exists
        } else {
          // not logged in
          //console.log(exists);
          return exists
        }
      });
    switch (this.strUserSession == true) {
      case false:
        this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
      case true:
        await this.OktaGetUserService.GetUserInfo();
        await this.OktaResetMfaService.ResetMFA(this.OktaGetUserService.uriFactorReset,this.OktaGetUserService.strThisSession.tokens.accessToken.accessToken);
      // await this.GetGeolocationService.GetGeo();

    }
  }

}
