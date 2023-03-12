import { Component, ChangeDetectionStrategy } from '@angular/core';
import{ GlobalFile } from './global-file';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'cem-web';
  currentScreenSize!: string;

  // Browser window size map
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            GlobalFile.screenSize = this.displayNameMap.get(query) ?? 'Unknown';
            this.currentScreenSize = GlobalFile.screenSize;
          }
        }
      });
  }

  /*
  //-- Window size logger for test purposes --//
  ngOnInit() {
    //For test purposes window size logger
    console.log("Local var screenSize ", this.currentScreenSize);
    console.log("Global var screenSize ", this.currentScreenSize);
  }
  */
}
