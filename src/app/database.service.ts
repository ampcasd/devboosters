import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { EmailService } from './email-service.service';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private emailService: EmailService) { }

  saveRecord(email: string, name?: string): void {
    this.emailService.sendConfirmationEmail(email);

    const save = firebase.functions().httpsCallable('saveMail');

    save(email).then((response) => {
      console.log('httpsCallable response', response);
    }).catch((err) => console.log('err', err))

    firebase.firestore().collection('emails').add({
      email
    })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        console.error('Something went terribly wrong :(', error);
      });
  }
}
