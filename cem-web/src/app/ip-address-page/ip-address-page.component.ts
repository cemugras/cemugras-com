import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { GlobalFile } from "../global-file";
import { IpGeoLocationClass } from "./ip-address-collection";
import * as Leaflet from "leaflet";
import { Icon } from "leaflet";

@Component({
  selector: 'app-ip-address-page',
  templateUrl: './ip-address-page.component.html',
  styleUrls: ['./ip-address-page.component.scss']
})
export class IpAddressPageComponent implements OnInit {

  ipGeoLocationClass: IpGeoLocationClass;

  // Map Leaflet components
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  markersTemp: marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {})
    ],
    zoomControl: false,
    dragging: false,
    scrollWheelZoom: false,
    touchZoom: false,
    doubleClickZoom: false,
    attributionControl: false,
    zoom: 7
  }

  constructor(private httpClient: HttpClient, private translate: TranslateService, private changeDetectorRef: ChangeDetectorRef) {
    translate.setDefaultLang(GlobalFile.language);

    this.ipGeoLocationClass = {} as IpGeoLocationClass;

    //-- Window size logger for test purposes --//
    //console.log("[EarthquakesPageComponent]Local var screenSize ", this.currentScreenSize);
  }

  ngOnInit(): void {
    this.fillIpCountryData();
  }

  fillIpCountryData() {
    let url = 'https://flagsapi.com/';
    this.getIpGeoLocation().subscribe(response => {
      url = url + response.country + "/shiny/24.png";
      this.ipGeoLocationClass = new IpGeoLocationClass(
        response.ip,
        response.city,
        response.region,
        response.country,
        response.loc,
        response.org,
        response.postal,
        response.timezone,
        url
      );

      this.fillMap();
      this.changeDetectorRef.detectChanges();
    },
      error => {
        console.log("Error occured, re-fetching..");
        this.fillIpCountryData();
      })
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }

  private fillMap() {
    const splitted = this.ipGeoLocationClass.loc.split(",");
    let lat = splitted[0];
    let lon = splitted[1];
    let positionVar = {lat: parseFloat(lat), lng: parseFloat(lon)};
    this.markersTemp.push({
      position: positionVar,
      label: this.translate.instant('homeComponent.myIp.marker'),
      draggable: false
    });

    const marker = this.generateMarker(this.markersTemp[0], 0);
    marker.setIcon(new Icon({
      iconUrl: 'https://icon-library.com/images/round-icon/round-icon-8.jpg',
      iconSize: [20, 20]
    }));
    marker.addTo(this.map).bindPopup(this.markersTemp[0].label);
    this.map.panTo(this.markersTemp[0].position);
    this.markers.push(marker)
  }

  private getIpGeoLocation(): Observable<any> {
    const url = "https://ipinfo.io/json?token=5b8e95b87826a7";
    return this.httpClient.get(url);
  }
}

interface marker {
  position:
    {
      lat: number,
      lng: number
    }
  label: string;
  draggable: boolean;
}
