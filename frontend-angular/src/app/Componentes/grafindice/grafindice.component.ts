import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { from } from 'rxjs';
import { IndiceambientalService, Indice } from 'src/app/Servicios/indiceambiental.service';

@Component({
  selector: 'app-grafindice',
  templateUrl: './grafindice.component.html',
  styleUrls: ['./grafindice.component.css']
})
export class GrafindiceComponent implements OnInit {
  // Arreglo de indices ambientales
  ListaIndices: Indice[];
  //Arreglo de los id que vamos a pasar
  private id = [];

  //Arreglo de los indices que vamos a pasar
  private indice = [];

  // Inyecto el servicio para obtener los indices
  constructor(private IndiceambientalService : IndiceambientalService) { }

  ngOnInit(): void {
    this.listarIndicesAmbientales();
  }

  listarIndicesAmbientales()
  {
    this.lineChartData = [];
    this.lineChartLabels = [];
    let blinkArry: any[] = [];


    this.IndiceambientalService.getIndicesAmbientales().subscribe( res => 
      {
        this.ListaIndices=<any>res; // Obtengo todos los Niveles que trae el Service

        // Hacemos un recorrido almacenando en cada arreglo lo necesario
        for (const indice of this.ListaIndices) 
        {
          this.id.push(indice.id);
          this.indice.push(indice.indice);
          this.lineChartLabels.push(indice.id);

          // Le paso los indice al arreglo
          blinkArry.push(indice.indice); 
          
        }
        
        // Envío los ultimos cien registros a barChartData
        this.lineChartData = [{ data: blinkArry, label: 'Indice'}];

      },
      err => console.log(err)
    );

  }


  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(0, 255, 0, 0.3)',
          },
          ticks: {
            fontColor: 'green',
          }
        }
      ]
    },
    annotation: {      
    },
  };
  public lineChartColors: Color[] = [
    { // green
      backgroundColor: 'rgba(0, 255, 0, 0.3)',
      borderColor: 'rgba(4, 128, 4,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
