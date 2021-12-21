import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { LoginComponent } from './pages/login/login.component';
import { FemmesComponent } from './pages/femmes/femmes.component';
import { HommesComponent } from './pages/hommes/hommes.component';
import { EnfantsComponent } from './pages/enfants/enfants.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './pages/cart/cart.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    LoginComponent,
    FemmesComponent,
    HommesComponent,
    EnfantsComponent,
    CartComponent,
    SignupComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
