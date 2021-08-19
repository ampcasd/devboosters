import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import firebase from 'firebase';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devboosters';

  constructor(public modalService: ModalService) {
    firebase.initializeApp(environment.firebase);
  }
}
