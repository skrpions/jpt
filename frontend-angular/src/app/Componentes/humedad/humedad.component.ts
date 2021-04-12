import { Component, OnInit } from '@angular/core';
import { Humedad, HumedadService } from "../../Servicios/humedad.service";


@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  styleUrls: ['./humedad.component.css']
})
export class HumedadComponent implements OnInit {

  // Arreglo de humedades
  ListarHumedad: Humedad[];
  constructor(private HumedadService: HumedadService) { }


  ngOnInit(): void {
    this.listarHumedades();
  }

  // Función para llstar todas las humedades
  listarHumedades()
  {
    this.HumedadService.getHumedades().subscribe(
      res => {
        console.log(res)
        this.ListarHumedad=<any>res; // Recupero todas las humedades que vienen que obtuvo el Service
        this.ngOnInit(); // Refresco el componente para que se vean los nuevos datos registrados
      },
      err => console.log(err)
    );
  }
}
