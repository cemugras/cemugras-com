import { Component } from '@angular/core';
import {GlobalFile} from "../global-file";

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

}

interface marker {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
}
