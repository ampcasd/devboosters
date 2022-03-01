import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import firebase from 'firebase';

import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'devboosters';

  constructor(public modalService: ModalService) {
    firebase.initializeApp(environment.firebase);
    const appCheck = firebase.appCheck();
    appCheck.activate('6LeGoxAcAAAAAHtvZjEcmVlI6G7nR6uxezk4fxZ1', true);
  }
}
