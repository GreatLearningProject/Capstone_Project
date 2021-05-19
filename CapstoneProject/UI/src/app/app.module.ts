import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SliderComponent } from './slider/slider.component';
import { EatnrepeatComponent } from './eatnrepeat/eatnrepeat.component';
import { UdipihotelComponent } from './udipihotel/udipihotel.component';
import { PunjabirasoiComponent } from './punjabirasoi/punjabirasoi.component';
import { SarvanabhavanComponent } from './sarvanabhavan/sarvanabhavan.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    SliderComponent,
    EatnrepeatComponent,
    UdipihotelComponent,
    PunjabirasoiComponent,
    SarvanabhavanComponent,
    SearchComponent,
    CartComponent,
    LogoutComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
