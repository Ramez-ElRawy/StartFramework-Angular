import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { StarComponent } from './Components/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
