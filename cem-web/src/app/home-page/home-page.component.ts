import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { GlobalFile } from "../global-file";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

    // Global variable
  currentScreenSize!: string;

  constructor(private translate: TranslateService) {
    this.currentScreenSize = GlobalFile.screenSize;
    translate.setDefaultLang(GlobalFile.language);

    //-- Window size logger for test purposes --//
    //console.log("[HomePageComponent]Local var screenSize ", this.currentScreenSize);
  }

  ngOnInit(): void {
  }

    scroll(target: HTMLElement) {
    //If Screen size matches for mobile then position the target to top; else center of the screen
    if(this.currentScreenSize == ("XSmall" || "Small")) {
      target.scrollIntoView({ behavior: "smooth", block: "start"});
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "center"});
    }

  }

}

