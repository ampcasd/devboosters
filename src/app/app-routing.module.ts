import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from 'src/app/contact/contact.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { AssistantsComponent } from './assistants/assistants.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { SourcingComponent } from './sourcing/sourcing.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'launchpad', component: LaunchpadComponent },
  { path: 'assistants', component: AssistantsComponent },
  { path: 'sourcing', component: SourcingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
