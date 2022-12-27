import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Module imports*/
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {MatMenuModule} from "@angular/material/menu";

/*Page imports*/
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    GalleryModule.withConfig({}),
    LightboxModule,
    MatButtonModule,
    YouTubePlayerModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
