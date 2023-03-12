import { Component } from '@angular/core';
import {GlobalFile} from "../global-file";

@Component({
  selector: 'app-earthquakes-page',
  templateUrl: './earthquakes-page.component.html',
  styleUrls: ['./earthquakes-page.component.css']
})
export class EarthquakesPageComponent {

  currentScreenSize!: string;

  constructor() {
    this.currentScreenSize = GlobalFile.screenSize;

    //-- Window size logger for test purposes --//
    //console.log("[EarthquakesPageComponent]Local var screenSize ", this.currentScreenSize);
  }

}
