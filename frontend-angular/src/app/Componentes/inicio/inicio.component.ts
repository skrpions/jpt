import { Component, OnInit } from '@angular/core';
import { Humedad, HumedadService } from "../../Servicios/humedad.service";
import {CargarScriptsService} from '../../Servicios/cargar-scripts.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // Variable
  ListarHumedad: Humedad[];
  constructor(private HumedadService: HumedadService, private _CargarScripts: CargarScriptsService) 
  {
    _CargarScripts.Carga(["main"]); 
   }

  ngOnInit(): void {
    
    this.listarHumedades();
  }

  listarHumedades()
  {
    this.HumedadService.getHumedades().subscribe(
      res => {
        console.log(res)
        this.ListarHumedad=<any>res;
      },
      err => console.log(err)
      
    );
  }

}
