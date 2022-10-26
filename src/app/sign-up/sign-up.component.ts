import { Component, OnInit, VERSION } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  goole = faGoogle;

  name = 'Angular ' + VERSION.major;

  formSubmitted = false;
  registrationFormGroup = new FormGroup({
    name: new  FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15})')])


  });


  onSubmit(): void{
    this.formSubmitted = true;
    if (this.registrationFormGroup.valid){
      return;
    }
  }



  ngOnInit(): void {

  }

}
