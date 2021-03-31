import { Component, OnInit } from '@angular/core';
import { Temperatura, TemperaturaService } from 'src/app/Servicios/temperatura.service';


@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {

  // Variable
  ListarHumedad: Temperatura[];

  constructor(private TemperaturaService : TemperaturaService) { }

  ngOnInit(): void {
    this.listarTemperaturas();
  }

  // Función para listar todas las temperaturas
  listarTemperaturas()
  {
    this.TemperaturaService.getTemperaturas().subscribe(
      res => {
        console.log(res)
        this.listarTemperaturas=<any>res;
        this.ngOnInit(); // Refresco el componente para que se vean los nuevos datos registrados
      },
      err => console.log(err)
    );
  }
}
