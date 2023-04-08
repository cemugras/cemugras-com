import { Component } from '@angular/core';
import { GlobalFile } from "../global-file";
import { EarthquakeClass } from "./earthquake-collection";
import * as Leaflet from 'leaflet';
import { Icon } from "leaflet";

export interface EarthquakeListElement {
  date: string;
  latitude: string;
  longitude: string;
  mag: string;
  location: string;
}

@Component({
  selector: 'app-earthquakes-page',
  templateUrl: './earthquakes-page.component.html',
  styleUrls: ['./earthquakes-page.component.scss']
})

export class EarthquakesPageComponent {

  currentScreenSize!: string;
  public selectorVal: string;

  // Table components
  earthquakeClass: EarthquakeClass;
  displayedColumns: string[] = ['date', 'latitude', 'longitude', 'mag', 'location'];
  dataSource: EarthquakeListElement[] = [];

  // Map Leaflet components
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  markersTemp: marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {})
    ],
    zoom: 6,
    center: { lat: 39.1461, lng: 34.1595 }
  }


  constructor() {
    this.currentScreenSize = GlobalFile.screenSize;
    this.selectorVal ='table';

    this.earthquakeClass = {} as EarthquakeClass;

    //-- Window size logger for test purposes --//
    //console.log("[EarthquakesPageComponent]Local var screenSize ", this.currentScreenSize);
  }

  ngOnInit() {
    this.fetchEarthquakeData();
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

  async fetchEarthquakeData() {
    const response = await fetch("https://api.orhanaydogdu.com.tr/deprem/kandilli/live?limit=100");
    let jsonData = await response.json();

    this.earthquakeClass = new EarthquakeClass(
      jsonData.status,
      jsonData.httpStatus,
      jsonData.serverloadms,
      jsonData.desc,
      jsonData.metadata,
      jsonData.result
    );

    this.dataSource = [];

    this.earthquakeClass.result.forEach(data => {
      let latitude = data.geojson.coordinates[1];
      let longitude = data.geojson.coordinates[0];
      this.dataSource.push({
        date: data.date,
        latitude: latitude,
        longitude: longitude,
        mag: data.mag,
        location: data.title
      });

      let positionVar = { lat: parseFloat(latitude), lng: parseFloat(longitude)};

      this.markersTemp.push({
        position: positionVar,
        label: 'Magnitude: ' + data.mag + '<br>' + data.title + '<br>' + data.date,
        draggable: false
      });
    });
  }

  private fillMap() {

    const initialMarkers = this.markersTemp;

    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.setIcon(new Icon({
        iconUrl: 'https://icon-library.com/images/round-icon/round-icon-8.jpg',
        iconSize: [20, 20]
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
