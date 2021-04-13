import { Component, OnInit } from '@angular/core';
import { Indice, IndiceambientalService } from 'src/app/Servicios/indiceambiental.service';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {



  // Variable
  ListarIndiceAmbiental: Indice[];
  constructor(private IndiceambientalService: IndiceambientalService) { }


  ngOnInit(): void {
    this.listarIndiceAmbiental();
  }

  // Función para listar todas los indices ambientales
  listarIndiceAmbiental()
  {
    this.IndiceambientalService.getIndicesAmbientales().subscribe(
      res => {
        console.log(res)
        this.ListarIndiceAmbiental=<any>res; // Almaceno la lista de los indices en ListarIndiceAmbiental
        this.ngOnInit(); // Refresco el componente para que se vean los nuevos datos registrados
      },
      err => console.log(err)
    );
  }
}

