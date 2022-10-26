import { Component, OnInit } from '@angular/core';
import {} from '@fortawesome/free-brands-svg-icons'
import {faTruck} from '@fortawesome/free-solid-svg-icons'
import {faDotCircle} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
   truck= faTruck;
   circle=faDotCircle;
   
  constructor() { }

  

  ngOnInit(): void {

    

    
  }

}
