import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "app/shared/okta/okta-config.service";

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompleteComponent implements OnInit {
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession: Boolean;
  constructor(
    public OktaSDKAuthService: OktaSDKAuthService,
    public OktaConfigService: OktaConfigService,
  ) { }

  async ngOnInit() {
    await this.authService.session.exists()
    .then(function (exists) {
      if (exists) {
        // logged in
        //console.log('Session to Okta : ' + exists);
        
        return exists
      } else {
        // not logged in
        //console.log(exists);
        window.location.replace(this.OktaConfigService.strPostLogoutURL)
        return exists
      }
    });
  }

}
