import { Component, OnInit } from '@angular/core';
import { OktaWidgetService } from 'app/shared/okta/okta-widget.service';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-config-mfa-modal',
  templateUrl: './config-mfa-modal.component.html',
  styleUrls: ['./config-mfa-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigMfaModalComponent implements OnInit {

  constructor(
    public OktaWidgetService: OktaWidgetService,

  ) { }

  async ngOnInit() {
    await this.OktaWidgetService.CloseWidget();
    await this.OktaWidgetService.ReconfigureMFA();
  }

}
