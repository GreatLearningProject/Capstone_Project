import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EatnrepeatComponent } from './eatnrepeat/eatnrepeat.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LogoutComponent } from './logout/logout.component';
import { PunjabirasoiComponent } from './punjabirasoi/punjabirasoi.component';
import { RegistrationComponent } from './registration/registration.component';
import { SarvanabhavanComponent } from './sarvanabhavan/sarvanabhavan.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UdipihotelComponent } from './udipihotel/udipihotel.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent, children: [
      { path: 'app-udipihotel', component: UdipihotelComponent, pathMatch: 'full' },
      { path: 'app-punjabirasoi', component: PunjabirasoiComponent },
      { path: 'app-sarvanabhavan', component: SarvanabhavanComponent },
      { path: '', component: SarvanabhavanComponent },
      { path: 'app-eatnrepeat', component: EatnrepeatComponent, pathMatch: 'full' },
      { path: 'app-cart', component: CartComponent },
      { path: 'app-search', component: SearchComponent },
      { path: 'app-header', component: HeaderComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'app-loginsuccess', component: LoginsuccessComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'app-checkout', component: CheckoutComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
