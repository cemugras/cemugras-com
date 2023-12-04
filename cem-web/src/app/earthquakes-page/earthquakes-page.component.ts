import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalFile } from "../global-file";
import { EarthquakeClass } from "./earthquake-collection";
import * as Leaflet from 'leaflet';
import { Icon } from "leaflet";
import { MatTable } from "@angular/material/table";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";

export interface EarthquakeListElement {
  date: string;
  latitude: string;
  longitude: string;
  mag: string;
  location: string;
}

const ELEMENT_DATA: EarthquakeListElement[] = [];

@Component({
  selector: 'app-earthquakes-page',
  templateUrl: './earthquakes-page.component.html',
  styleUrls: ['./earthquakes-page.component.scss']
})

export class EarthquakesPageComponent implements OnInit{

  currentScreenSize!: string;
  public selectorVal: string;

  // Table components
  earthquakeClass: EarthquakeClass;
  dataSource = [...ELEMENT_DATA];

  // Map Leaflet components
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  markersTemp: marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {})
    ],
    attributionControl: false,
    zoom: 6,
    center: { lat: 39.1461, lng: 34.1595 }
  }

  @ViewChild('table') table!: MatTable<EarthquakeListElement>;
  displayedColumns = ['date', 'latitude', 'longitude', 'mag', 'location'];

  ngOnInit() {
    this.fillRows();
  }

  fillRows() {
    this.getEarthquakeList().subscribe(res => {
      console.log("res", res);

      this.earthquakeClass = new EarthquakeClass(
        res.status,
        res.httpStatus,
        res.serverloadms,
        res.desc,
        res.metadata,
        res.result
      );

      ELEMENT_DATA.length = 0;

      this.earthquakeClass.result.forEach(data => {
        let latitude = data.geojson.coordinates[1];
        let longitude = data.geojson.coordinates[0];
        ELEMENT_DATA.push({
          date: data.date,
          latitude: latitude,
          longitude: longitude,
          mag: data.mag,
          location: data.title
        });

        let positionVar = {lat: parseFloat(latitude), lng: parseFloat(longitude)};

        this.markersTemp.push({
          position: positionVar,
          label: 'Magnitude: ' + data.mag + '<br>' + data.title + '<br>' + data.date,
          draggable: false
        });
      });

      this.dataSource.splice(0, this.dataSource.length);
      ELEMENT_DATA.forEach(element => {
        this.dataSource.push(element);
        this.table.renderRows();
      })
    })
  }

  constructor(private httpClient: HttpClient, private translate: TranslateService) {
    this.currentScreenSize = GlobalFile.screenSize;
    this.selectorVal ='table';
    translate.setDefaultLang(GlobalFile.language);

    this.earthquakeClass = {} as EarthquakeClass;

    //-- Window size logger for test purposes --//
    //console.log("[EarthquakesPageComponent]Local var screenSize ", this.currentScreenSize);
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.fillMap();
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

  private getEarthquakeList(): Observable<any> {
    return this.httpClient.get("https://api.orhanaydogdu.com.tr/deprem/kandilli/live?limit=100");
  }

  private fillMap() {

    const initialMarkers = this.markersTemp;

    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.setIcon(new Icon({
        //iconUrl: 'https://icon-library.com/images/round-icon/round-icon-8.jpg',
        iconUrl: 'https://static.vecteezy.com/system/resources/previews/008/506/364/non_2x/3d-illustration-of-location-icon-free-png.png',
        iconSize: [25, 30]
      }));
      marker.addTo(this.map).bindPopup(data.label);
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }

  public onValChange(val: string) {
    this.selectorVal = val;

    //-- Selector logger for test purposes --//
    //console.log("you selected value: " + this.selectorVal);
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
