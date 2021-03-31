import { Component, OnInit } from '@angular/core';
import {  Nivel, NivelService } from 'src/app/Servicios/nivel.service';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {

  // Variable
  ListarNivel: Nivel[];


  constructor(private NivelService : NivelService) { }

  ngOnInit(): void {
    this.listarNiveles();
  }

  // Función para listar todas los niveles
  listarNiveles()
  {
    this.NivelService.getNiveles().subscribe(
      res => {
        console.log(res)
        this.listarNiveles=<any>res;
        this.ngOnInit(); // Refresco el componente para que se vean los nuevos datos registrados

      },
      err => console.log(err)
    );
  }
}
