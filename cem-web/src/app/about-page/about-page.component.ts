import {Component, OnInit} from '@angular/core';
import {GlobalFile} from "../global-file";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  currentScreenSize!: string;

  constructor() {
    this.currentScreenSize = GlobalFile.screenSize;

    //-- Window size logger for test purposes --//
    //console.log("[AboutPageComponent]Local var screenSize ", this.currentScreenSize);
  }

  ngOnInit(): void {
  }

}
