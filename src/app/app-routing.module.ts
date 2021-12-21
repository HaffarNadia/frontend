import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EnfantsComponent } from './pages/enfants/enfants.component';
import { FemmesComponent } from './pages/femmes/femmes.component';
import { HomeComponent } from './pages/home/home.component';
import { HommesComponent } from './pages/hommes/hommes.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'menu' , component:MenuComponent},
  {path: 'add-product' , component:AddProductComponent},
  {path: 'women' , component:FemmesComponent},
  {path: 'men' , component:HommesComponent},
  {path: 'kids' , component:EnfantsComponent},
  {path: 'menu/:id' , component:MenupageComponent},
  {path: 'cart' ,component:CartComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'signup' , component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
