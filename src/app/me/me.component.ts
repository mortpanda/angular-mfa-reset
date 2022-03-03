import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "app/shared/okta/okta-config.service";
import { OktaGetTokenService } from 'app/shared/okta/okta-get-token.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OktaGetUserService } from 'app/shared/okta/okta-get-user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionConfirmComponent } from 'app/action-confirm/action-confirm.component';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeComponent implements OnInit {
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strThisSession;
  strUserSession: Boolean;


  constructor(
    public OktaGetTokenService: OktaGetTokenService,
    public OktaSDKAuthService: OktaSDKAuthService,
    public OktaConfigService: OktaConfigService,
    public OktaGetUserService: OktaGetUserService,
    public _matdialog: MatDialog,
    public ActionConfirmComponent: ActionConfirmComponent,
  ) { }

  async ngOnInit() {
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
      // await this.GetGeolocationService.GetGeo();

    }
  }


  startMFAReset(){
    const dialogUC = new MatDialogConfig();
    dialogUC.disableClose = true;
    dialogUC.id = "WidgetComponent";
    dialogUC.height = "auto";
    dialogUC.width = "auto";
    const modalDialog = this._matdialog.open(ActionConfirmComponent, dialogUC);
  }

}
