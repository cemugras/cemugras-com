import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  imageData = data;

  items: GalleryItem[] | undefined;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit(): void {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.srcUrl }));


    /** Lightbox Example */

      // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
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
