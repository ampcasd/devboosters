import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SpotlightsComponent } from './spotlights/spotlights.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    PricingComponent,
    HomePageComponent,
    SpotlightsComponent,
    BannerComponent,
    FooterComponent,
    FeaturesComponent,
    CallToActionComponent,
    ContactFormComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
