import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }


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
