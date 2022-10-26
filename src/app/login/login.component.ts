import { Component, OnInit, VERSION } from '@angular/core';
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { AbstractControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  goole = faGoogle;

  name = 'Angular ' + VERSION.major;

  formSubmitted = false;
  registrationFormGroup = new FormGroup({
    name: new  FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15})')])


  });


  onSubmit(): void{
    this.formSubmitted = true;
    if (this.registrationFormGroup.valid){
      return;
    }
  }

  constructor() { }

  ngOnInit(): void {
    
  }


}
