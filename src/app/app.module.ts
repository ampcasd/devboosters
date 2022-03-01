import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
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
import { AssistantsComponent } from './assistants/assistants.component';
import { SourcingComponent } from './sourcing/sourcing.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAKajfQJJtg1tB8h7imO7JTokYSBOoux68',
  authDomain: 'devboosterscom.firebaseapp.com',
  databaseURL: 'https://devboosterscom.firebaseio.com',
  projectId: 'devboosterscom',
  storageBucket: 'devboosterscom.appspot.com',
  messagingSenderId: '21456592135',
  appId: '1:21456592135:web:d7e47aaba8878704ba79a2',
  measurementId: 'G-3NNN37H99Z',
};
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
    LaunchpadComponent,
    AssistantsComponent,
    SourcingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
