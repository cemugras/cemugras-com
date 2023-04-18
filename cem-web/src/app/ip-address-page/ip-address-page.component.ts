import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { GlobalFile } from "../global-file";
import {IpClass, IpGeoLocationClass} from "./ip-address-collection";

@Component({
  selector: 'app-ip-address-page',
  templateUrl: './ip-address-page.component.html',
  styleUrls: ['./ip-address-page.component.scss']
})
export class IpAddressPageComponent implements OnInit {

  ipClass: IpClass;
  ipGeoLocationClass: IpGeoLocationClass;

  constructor(private httpClient: HttpClient, private translate: TranslateService, private changeDetectorRef: ChangeDetectorRef) {
    translate.setDefaultLang(GlobalFile.language);

    this.ipClass = {} as IpClass;
    this.ipGeoLocationClass = {} as IpGeoLocationClass;

    //-- Window size logger for test purposes --//
    //console.log("[EarthquakesPageComponent]Local var screenSize ", this.currentScreenSize);
  }

  ngOnInit(): void {
    this.fillIpCountryData();
  }

  fillIpCountryData() {
    let url = 'https://flagsapi.com/';
    this.getIpAddress().subscribe(res => {
      this.ipClass = new IpClass(res.ip);

      this.getIpGeoLocation().subscribe(response => {
        url = url + response.countryCode + "/shiny/24.png";
        this.ipGeoLocationClass = new IpGeoLocationClass(
          response.country,
          response.countryCode,
          response.region,
          response.regionName,
          response.city,
          response.zip,
          response.lat,
          response.lon,
          response.timeZone,
          response.isp,
          response.as,
          url
        );

        this.changeDetectorRef.detectChanges();
      })
    })
  }

  private getIpAddress(): Observable<any> {
    return this.httpClient.get("https://api.ipify.org/?format=json");
  }

  private getIpGeoLocation(): Observable<any> {
    const url = "http://ip-api.com/json/" + this.ipClass.ip;
    return this.httpClient.get(url);
  }
}
