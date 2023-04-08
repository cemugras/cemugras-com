import {Component} from '@angular/core';
import {GlobalFile} from "../global-file";

export interface PeriodicElement {
  name: string;
  url: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Mail', url: 'cemugrs@gmail.com', icon: 'https://cdn-icons-png.flaticon.com/512/6806/6806987.png'},
  {name: 'LinkedIn', url: 'linkedin.com/in/cemugras/', icon: '/assets/sidebar/linkedin-icon.png'},
  {name: 'HackerRank', url: 'hackerrank.com/cemugrs', icon: '/assets/sidebar/hackerrank-icon.png'},
  {name: 'Google Play', url: 'play.google.com/store/apps/developer?id=Cem+Ugras', icon: '/assets/sidebar/googleplay-icon.png'},
  {name: 'Youtube', url: 'youtube.com/@mzm1187', icon: '/assets/sidebar/youtube-icon.png'},
  {name: 'Steam', url: 'steamcommunity.com/id/cembabbe/', icon: '/assets/sidebar/steam-icon.png'},
  {name: 'GitHub', url: 'github.com/cemugras', icon: '/assets/sidebar/github-icon.png'},
  {name: 'Donate', url: 'www.buymeacoffee.com/cemugras', icon: '/assets/sidebar/donate-icon.png'}
];

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  currentScreenSize!: string;

  // Table components
  displayedColumns: string[] = ['icon', 'name', 'url'];
  dataSource = ELEMENT_DATA;

  constructor() {
    this.currentScreenSize = GlobalFile.screenSize;

    //-- Window size logger for test purposes --//
    //console.log("[ContactPageComponent]Local var screenSize ", this.currentScreenSize);
  }

  goToLink(siteUrl: string) {
    window.open("//" + siteUrl, '_blank');
  }
}
