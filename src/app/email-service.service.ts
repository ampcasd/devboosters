import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  sendConfirmationEmail(emailAddress: string, name: string) {
    return this.httpClient.get(
      `https://us-central1-devboosterscom.cloudfunctions.net/sendMail?email=${emailAddress}?name=${name}`
    ).subscribe(response => {
      console.log(response);
    });
  }
}
