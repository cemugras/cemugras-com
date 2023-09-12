import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { GlobalFile } from "../global-file";
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {

  // Gallery variables
  imageData = data;
  imageData2 = data2;
  items: GalleryItem[] | undefined;
  items2: GalleryItem[] | undefined;

  // Video variables
  videoId = 'bgEe5nfFT9g';
  height = 200;
  width = 300;
  apiLoaded = false;

  // Global variable
  currentScreenSize!: string;

  constructor(public gallery: Gallery, public lightbox: Lightbox, private translate: TranslateService) {
    this.currentScreenSize = GlobalFile.screenSize;
    translate.setDefaultLang(GlobalFile.language);

    //-- Window size logger for test purposes --//
    //console.log("[HomePageComponent]Local var screenSize ", this.currentScreenSize);
  }

  ngOnInit(): void {
    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.srcUrl }));
    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');
    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom
    });
    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);

    this.items2 = this.imageData2.map(item => new ImageItem({ src: item.srcUrl, thumb: item.srcUrl }));
    // Get a lightbox gallery ref
    const lightboxRef2 = this.gallery.ref('lightbox-2');
    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom
    });
    // Load items into the lightbox gallery ref
    lightboxRef2.load(this.items2);

    // Youtube video
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

}

const data = [
  {
    srcUrl: 'https://i.hizliresim.com/ldqkesm.jpg',
    previewUrl: 'https://i.hizliresim.com/ldqkesm.jpg'
  },
  {
    srcUrl: 'https://i.hizliresim.com/4ytfklg.jpeg',
    previewUrl: 'https://i.hizliresim.com/4ytfklg.jpeg'
  },
  {
    srcUrl: 'https://i.hizliresim.com/8g4rv57.jpeg',
    previewUrl: 'https://i.hizliresim.com/8g4rv57.jpeg'
  },
  {
    srcUrl: 'https://i.hizliresim.com/pzoexii.jpg',
    previewUrl: 'https://i.hizliresim.com/pzoexii.jpg'
  }
];

const data2 = [
  {
    srcUrl: 'https://media.sciencephoto.com/c0/55/14/67/c0551467-800px-wm.jpg',
    previewUrl: 'https://media.sciencephoto.com/c0/55/14/67/c0551467-800px-wm.jpg'
  },
  {
    srcUrl: 'https://i.hizliresim.com/ns0wjzb.jpg',
    previewUrl: 'https://i.hizliresim.com/ns0wjzb.jpg'
  },
  {
    srcUrl: 'https://i.hizliresim.com/c9i36d5.jpg',
    previewUrl: 'https://i.hizliresim.com/c9i36d5.jpg'
  },
  {
    srcUrl: 'https://i.hizliresim.com/39bkeb2.jpg',
    previewUrl: 'https://i.hizliresim.com/39bkeb2.jpg'
  }
];