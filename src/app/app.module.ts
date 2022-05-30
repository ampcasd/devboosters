import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { SpotlightsComponent } from './spotlights/spotlights.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SourcingComponent } from './sourcing/sourcing.component';
import { AssistantsComponent } from './assistants/assistants.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    LaunchpadComponent,
    HomePageComponent,
    SpotlightsComponent,
    BannerComponent,
    FooterComponent,
    FeaturesComponent,
    CallToActionComponent,
    ContactFormComponent,
    ModalComponent,
    AssistantsComponent,
    SourcingComponent,
    LaunchpadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPageScrollCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
