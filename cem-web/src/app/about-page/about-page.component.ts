import { Component, OnInit } from '@angular/core';
import {GlobalFile} from "../global-file";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  currentScreenSize!: string;

  constructor() {
    this.currentScreenSize = GlobalFile.screenSize;
    console.log("[AboutPageComponent]Local var screenSize ", this.currentScreenSize);
  }

  ngOnInit(): void {
  }

}
