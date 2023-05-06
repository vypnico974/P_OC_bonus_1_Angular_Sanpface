import { NgModule } from '@angular/core';
//import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { FaceSnapComponent } from './face-snap/face-snap.component';
//import { registerLocaleData } from '@angular/common';
//import * as fr from '@angular/common/locales/fr';
//import { FaceSnapListComponent } from './face-snaps/face-snap-list/face-snap-list.component';
//import { HeaderComponent } from './core/components/header/header.component';
import { AppRoutingModule } from './app-routing-module';
//import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
// import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {  ReactiveFormsModule } from '@angular/forms';
// import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import {HttpClientModule} from '@angular/common/http';
//import { httpInterceptorProviders } from './core/interceptors';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent,
    // FaceSnapComponent,
    // FaceSnapListComponent,
    // HeaderComponent,
   // LandingPageComponent,
    // SingleFaceSnapComponent,
    PageNotFoundComponent,
    // NewFaceSnapComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    FaceSnapsModule,
    LandingPageModule

  ],
  // providers: [
  //   // { provide: LOCALE_ID, useValue: 'fr-FR' },
  //   // httpInterceptorProviders
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  //  registerLocaleData(fr.default);
  }
}