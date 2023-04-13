import { Component, OnInit } from '@angular/core';
import { GlobalFile } from "../global-file";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  currentScreenSize!: string;

  constructor(private translate: TranslateService) {
    this.currentScreenSize = GlobalFile.screenSize;
    translate.setDefaultLang(GlobalFile.language);

    //-- Window size logger for test purposes --//
    //console.log("[AboutPageComponent]Local var screenSize ", this.currentScreenSize);
  }

  ngOnInit(): void {
  }

}
