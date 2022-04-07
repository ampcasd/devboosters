import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DatabaseService } from '../database.service';

export interface CTAConfiguration {
  showForm: boolean;
  header: string;
  description: string;
  buttonText: string;
}

@Component({
  selector: 'call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: [
    './call-to-action.component.scss',
    '../spotlights/spotlights.component.scss',
  ],
})
export class CallToActionComponent implements OnChanges {
  @Input() configuration: CTAConfiguration;

  name: string;
  email: string;

  nameInvalid: boolean;
  emailInvalid: boolean;

  showForm = true;

  constructor(private databaseService: DatabaseService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('configuration' in changes) {
      this.showForm = this.configuration.showForm;0
    }
  }

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
