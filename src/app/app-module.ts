import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServicePersonajes } from '../services/service.personajes';
import { PersonajesComponent } from './components/personajes-component/personajes-component';
import { CreatePersonajeComponent } from './components/create-personaje-component/create-personaje-component';

@NgModule({
  declarations: [App, HomeComponent, MenuComponent, PersonajesComponent, CreatePersonajeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicePersonajes],
  bootstrap: [App],
})
export class AppModule {}
