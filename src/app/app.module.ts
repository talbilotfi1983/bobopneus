import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { NavComponent } from './modules/nav/nav.component';
import { PopupInscriptionGaragesComponent } from './modules/nav/popup-inscription-garages/popup-inscription-garages.component';
import { P404Component } from './p404/p404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EquipementsComponent } from './pages/home/equipements/equipements.component';
import { HomeComponent } from './pages/home/home.component';
import { JantesComponent } from './pages/home/jantes/jantes.component';
import { PiecesComponent } from './pages/home/pieces/pieces.component';
import { PneusComponent } from './pages/home/pneus/pneus.component';
import { SliderComponent } from './pages/home/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    P404Component,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PopupInscriptionGaragesComponent,
    SliderComponent,
    HomeComponent,
    ContactComponent,
    PiecesComponent,
    EquipementsComponent,
    PneusComponent,
    JantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
