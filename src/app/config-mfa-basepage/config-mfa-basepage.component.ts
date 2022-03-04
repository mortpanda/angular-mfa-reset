import { Component, OnInit } from '@angular/core';
import { ConfigMfaModalComponent } from 'app/config-mfa-modal/config-mfa-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-config-mfa-basepage',
  templateUrl: './config-mfa-basepage.component.html',
  styleUrls: ['./config-mfa-basepage.component.css']
})
export class ConfigMfaBasepageComponent implements OnInit {

  constructor(
    public ConfigMfaModalComponent:ConfigMfaModalComponent,
    public _matdialog: MatDialog,
  ) { }

  async ngOnInit() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.id = "login-component";
        dialogConfig.height = "auto";
        dialogConfig.width = "auto";
        const modalDialog = this._matdialog.open(ConfigMfaModalComponent, dialogConfig);
  }

}
