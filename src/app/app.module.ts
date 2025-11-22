import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { CarPageComponent } from './car-page/car-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormPageComponent } from './form-page/form-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CarPageComponent,
    CartPageComponent,
    NotFoundComponent,
    FormPageComponent,
     FooterComponent,
     ContactPageComponent,
     HeroSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }