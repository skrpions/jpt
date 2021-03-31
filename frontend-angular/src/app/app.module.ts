import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import { NivelComponent } from './Componentes/nivel/nivel.component';
import { TemperaturaComponent } from './Componentes/temperatura/temperatura.component';
import { IndiceComponent } from './Componentes/indice/indice.component';
import { HumedadComponent } from './Componentes/humedad/humedad.component';
import { GrafhumedadComponent } from './Componentes/grafhumedad/grafhumedad.component';
import { GraftemperaturaComponent } from './Componentes/graftemperatura/graftemperatura.component';
import { GrafnivelComponent } from './Componentes/grafnivel/grafnivel.component';
import { CargarScriptsService } from './Servicios/cargar-scripts.service';
import { FormularioComponent } from './Componentes/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NivelComponent,
    TemperaturaComponent,
    IndiceComponent,
    HumedadComponent,
    GrafhumedadComponent,
    GraftemperaturaComponent,
    GrafnivelComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
