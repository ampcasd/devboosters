import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from 'src/app/contact/contact.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { AssistantComponent } from './assistant/assistant.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { SourcingComponent } from './sourcing/sourcing.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'launchpad', component: LaunchpadComponent },
  { path: 'assistant', component: AssistantComponent },
  { path: 'sourcing', component: SourcingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
