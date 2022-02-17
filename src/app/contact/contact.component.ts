import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name: string;
  email: string;

  nameInvalid: boolean;
  emailInvalid: boolean;

  showForm = true;

  constructor(private databaseService: DatabaseService) {}

  submit(): void {
    const name = this.name?.trim();
    const email = this.email?.trim();
    const emailIsValid = this.emailIsValid(email);
    console.log(name, email, emailIsValid);

    if (name && email && emailIsValid) {
      this.databaseService.saveRecord(email, name);
      this.showForm = false;
    } else {
      if (!name) {
        this.nameInvalid = true;
      } else {
        this.nameInvalid = false;
      }
      if (!email || !emailIsValid) {
        this.emailInvalid = true;
      } else {
        this.emailInvalid = false;
      }
    }
  }

  private emailIsValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
