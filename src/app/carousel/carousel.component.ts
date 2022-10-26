import { Component, Input, OnInit } from '@angular/core';
import {} from '@fortawesome/free-brands-svg-icons'
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

interface carouselImages{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images:carouselImages[]=[]
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;


  selectedIndex = 0;



  ngOnInit(): void {
    if(this.autoSlide){ 
    this.autoSlideImages();
    }
  }

 autoSlideImages(): void{
    setInterval(() => {
      this.onNextclick();
    },this.slideInterval);
 }

  onprevclick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }
    else{
      this.selectedIndex--;
    }
  }

  onNextclick(): void{
    if(this.selectedIndex === this.images.length -1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }

}