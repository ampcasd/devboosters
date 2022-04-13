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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly callToActionConfigurations = callToAction;

  title = 'devboosters';
  callToActionConfiguration: CTAConfiguration;

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
        console.log(params);
        switch (params.url) {
          case '/assistants' && '/assistants#features':
            this.callToActionConfiguration =
              this.callToActionConfigurations.assistants;
            break; 
          default:
            this.callToActionConfiguration =
              this.callToActionConfigurations.default;
        }
      });
  }
}
