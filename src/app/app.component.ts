import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import firebase from 'firebase';

import { environment } from '../environments/environment';
import { callToAction } from './call-to-action.configurations';
import {
  ActivatedRoute,
  NavigationEnd,
  ResolveStart,
  Router,
} from '@angular/router';
import { CTAConfiguration } from './call-to-action/call-to-action.component';
import { debounceTime, filter } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly callToActionConfigurations = callToAction;

  title = 'devboosters';
  callToActionConfiguration: CTAConfiguration;
  path: string;

  constructor(public modalService: ModalService, public router: Router) {
    firebase.initializeApp(environment.firebase);
    const appCheck = firebase.appCheck();
    appCheck.activate('6LeGoxAcAAAAAHtvZjEcmVlI6G7nR6uxezk4fxZ1', true);
    this.listenToRouter();
  }

  listenToRouter(): void {
    this.router.events
      .pipe(filter((p) => p instanceof NavigationEnd))
      .subscribe((params: NavigationEnd) => {
        this.path = params.url;
        switch (params.url) {
          case '/assistants':
            this.callToActionConfiguration =
              this.callToActionConfigurations.default;
            window.scrollTo({ top: 0 });
            break;
          case '/assistants#features':
            this.callToActionConfiguration =
              this.callToActionConfigurations.default;
            break;
          case '/homepage':
            window.scrollTo({ top: 0 });
            this.callToActionConfiguration =
              this.callToActionConfigurations.default;
            break;
          case '/sourcing':
            window.scrollTo({ top: 0 });
            this.callToActionConfiguration =
              this.callToActionConfigurations.default;
            break;
          case '/launchpad':
            window.scrollTo({ top: 0 });
            this.callToActionConfiguration =
              this.callToActionConfigurations.default;
            break;
          default:
            this.callToActionConfiguration =
              this.callToActionConfigurations.default;
        }
      });
  }
}
