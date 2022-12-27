import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import {GlobalFile} from "../global-file";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  // Gallery variables
  imageData = data;
  items: GalleryItem[] | undefined;

  // Video variables
  videoId = 'bgEe5nfFT9g';
  height = 200;
  width = 300;
  apiLoaded = false;

  // Global variable
  currentScreenSize!: string;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
    this.currentScreenSize = GlobalFile.screenSize;
    console.log("[HomePageComponent]Local var screenSize ", this.currentScreenSize);
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
