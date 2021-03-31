import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumedadComponent } from './Componentes/humedad/humedad.component';
import { IndiceComponent } from './Componentes/indice/indice.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NivelComponent } from './Componentes/nivel/nivel.component';
import { TemperaturaComponent } from './Componentes/temperatura/temperatura.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';

const routes: Routes = [
  // Agrego todas las rutas 
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'hum', component:HumedadComponent},
  {path:'tem', component:TemperaturaComponent},
  {path:'niv', component:NivelComponent},
  {path:'ind', component:IndiceComponent},
  {path:'add', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
