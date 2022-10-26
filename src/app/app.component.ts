import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Nawin-STR';

  images = [
    {
      imageSrc:
        'https://www.kalyanjewellers.net/images/banners/jewellery_banner.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://www.kalyanjewellers.net/images/banners/brands_banner.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://www.kalyanjewellers.net/images/investors-banner.jpg?v=3',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://d2yx3hwqxay3vo.cloudfront.net/static/version1666292105/frontend/Codilar/candere_desktop/en_US/Magento_Cms/images/collection_images/Lehar_Collection.jpg',
      imageAlt: 'person2',
    },
  ]


}

