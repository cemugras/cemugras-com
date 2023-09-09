import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from "./home-page/home-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { EarthquakesPageComponent } from "./earthquakes-page/earthquakes-page.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { IpAddressPageComponent } from "./ip-address-page/ip-address-page.component";
import { GameServerPingPageComponent } from './game-server-ping-page/game-server-ping-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'earthquakes', component: EarthquakesPageComponent },
  { path: 'notfound', component: NotFoundPageComponent },
  { path: 'my-ip', component: IpAddressPageComponent },
  { path: 'game-server-ping', component: GameServerPingPageComponent },
  { path: '**', pathMatch: 'full', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
