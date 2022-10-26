import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  @ViewChild('modal', { static: false })
  modal!: ModalComponent; 

  openModal() {
    this.modal.open();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
