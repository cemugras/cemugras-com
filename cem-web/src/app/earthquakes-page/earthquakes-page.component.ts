import { Component } from '@angular/core';
import {GlobalFile} from "../global-file";

export interface EarthquakeListElement {
  date: string;
  latitude: string;
  longitude: string;
  mag: string;
  location: string;
}

const ELEMENT_DATA: EarthquakeListElement[] = [
  {date: '03.02.2022', latitude:'40.1467', longitude:'26.4086', mag: '4.6', location: 'Geyikli'},
  {date: '03.02.2022', latitude:'40.1467', longitude:'26.4086', mag: '4.6', location: 'İzmir'},
  {date: '03.02.2022', latitude:'40.1467', longitude:'26.4086', mag: '4.6', location: 'Antalya'}
];

@Component({
  selector: 'app-earthquakes-page',
  templateUrl: './earthquakes-page.component.html',
  styleUrls: ['./earthquakes-page.component.css']
})

export class EarthquakesPageComponent {

  currentScreenSize!: string;
  lat: number = 39.1461;
  lng: number = 34.1595;
  zoom: number = 6;

  // Table components
  displayedColumns: string[] = ['date', 'latitude', 'longitude', 'mag', 'location'];
  dataSource = ELEMENT_DATA;

  markers: marker[] = [
    {
      lat: 40.1467,
      lng: 26.4086,
      label: 'Geyikli',
      draggable: true
    },
    {
      lat: 38.4237,
      lng: 27.1428,
      label: 'İzmir',
      draggable: false
    },
    {
      lat: 36.8969,
      lng: 30.7133,
      label: 'Antalya',
      draggable: false
    }
  ]

  onMouseOver(infoWindow: any, gm: any) {

    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }

    gm.lastOpen = infoWindow;
    infoWindow.open();
  }

  constructor() {
    this.currentScreenSize = GlobalFile.screenSize;

    //-- Window size logger for test purposes --//
    //console.log("[EarthquakesPageComponent]Local var screenSize ", this.currentScreenSize);
  }

  goToLink(siteUrl: string) {
    window.open("//" + siteUrl, '_blank');
  }

}

interface marker {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
}
