import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { from } from 'rxjs';
import { NivelService, Nivel } from 'src/app/Servicios/nivel.service';

@Component({
  selector: 'app-grafnivel',
  templateUrl: './grafnivel.component.html',
  styleUrls: ['./grafnivel.component.css']
})
export class GrafnivelComponent implements OnInit {

   // Arreglo de niveles
   ListaNiveles: Nivel[];
   //Arreglo de los id que vamos a pasar
   private id = [];
 
   //Arreglo de los ENG que vamos a pasar
   private eng = [];

   // Inyecto el servicio para obtener los niveles
   constructor(private NivelService : NivelService) { }

   ngOnInit(): void {
    this.lineChartData = [];
    this.lineChartLabels = [];
    let blinkArry: any[] = [];


    this.NivelService.getNiveles().subscribe( res => 
      {
        this.ListaNiveles=<any>res; // Obtengo todos los Niveles que trae el Service

        // Hacemos un recorrido almacenando en cada arreglo lo necesario
        for (const nivel of this.ListaNiveles) 
        {
          this.id.push(nivel.id);
          this.eng.push(nivel.ENG);
          this.lineChartLabels.push(nivel.id);

          // Convierto las comas por puntos para graficar. Si los decimales están con comas desde la bd, es necesario reemplazarlos por puntos en Angular
          let dataconpuntos = reemplazarComa(nivel.ENG);
          function reemplazarComa(data) {
              // convertir string en array y eliminar espacios en blanco
              let dataToArray = data.split(',').map(item => item.trim());
              // convertir array en cadena reemplazando la coma con un punto
              return dataToArray.join(".");
          }        
    
          blinkArry.push(dataconpuntos);

          // Obtengo los últimos 100 registros con slice(-101), ya que inicia desde el id 0. Si quisiera los últimos 25 registros debo colocar slice(-25)
          var ultimoscienregistros = blinkArry.slice(-100);
          // Envío los ultimos cien registros a barChartData
          this.lineChartData = [{ data: ultimoscienregistros, label: 'Eng'}];
        }
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