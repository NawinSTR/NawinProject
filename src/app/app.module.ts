import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule, } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CarouselModule } from './carousel/carousel.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactUsComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    HomeComponent,
    ModalComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule,
    CarouselModule,
    BrowserModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }



