import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

/*Module imports*/
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/*Page imports*/
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EarthquakesPageComponent } from './earthquakes-page/earthquakes-page.component';
import { IpAddressPageComponent } from './ip-address-page/ip-address-page.component';
import { GameServerPingPageComponent } from './game-server-ping-page/game-server-ping-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    HomePageComponent,
    ContactPageComponent,
    EarthquakesPageComponent,
    IpAddressPageComponent,
    GameServerPingPageComponent
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
    MatButtonModule,
    YouTubePlayerModule,
    MatMenuModule,
    MatTableModule,
    MatButtonToggleModule,
    HttpClientModule,
    LeafletModule,
    HttpClientModule,
    MatSlideToggleModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
              new TranslateHttpLoader(http, './assets/i18n/', `.json?v=${new Date().getTime()}`),
        deps: [HttpClient]
      }
    })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
