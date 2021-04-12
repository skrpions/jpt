import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { Humedad, HumedadService } from "../../Servicios/humedad.service";


@Component({
  selector: 'app-grafhumedad',
  templateUrl: './grafhumedad.component.html',
  styleUrls: ['./grafhumedad.component.css']
})
export class GrafhumedadComponent implements OnInit {

   // Arreglo de humedades
   ListarHumedad: Humedad[];
  //Arreglo de los id que vamos a pasar
  private id = [];

  //Arreglo de los ENG que vamos a pasar
  private eng = [];

     // Inyecto el servicio para obtener las humedades
  constructor(private HumedadService: HumedadService) { }

  ngOnInit(): void {

    //this.listarHumedades();
    this.barChartData = [];
    this.barChartLabels = [];
    let blinkArry: any[] = [];

    this.HumedadService.getHumedades().subscribe( res => {
        this.ListarHumedad=<any>res; // Obtengo todas las humedades que trae el Service

        // Hacemos un recorrido almacenando en cada arreglo lo necesario
        for (const humedad of this.ListarHumedad) 
        {
          this.id.push(humedad.id);
          this.eng.push(humedad.ENG);
          this.barChartLabels.push(humedad.id);

          // Convierto las comas por puntos para graficar. Si los decimales están con comas desde la bd, es necesario reemplazarlos por puntos en Angular
          let dataconpuntos = reemplazarComa(humedad.ENG);
          function reemplazarComa(data) {
              // convertir string en array y eliminar espacios en blanco
              let dataToArray = data.split(',').map(item => item.trim());
              // convertir array en cadena reemplazando la coma con un punto
              return dataToArray.join(".");
          }        
    
          blinkArry.push(dataconpuntos);

          // Obtengo los últimos 100 registros con slice(-101), ya que inicia desde el id 0. Si quisiera los últimos 25 registros debo colocar slice(-25)
          var ultimoscienregistros = blinkArry.slice(-101);
          // Envío los ultimos cien registros a barChartData
          this.barChartData = [{ data: ultimoscienregistros, label: 'Eng', backgroundColor: '#005a72' }];
        }
      },
      err => console.log(err)
    );
  }

  
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [{backgroundColor: ['#003040', '#003040']}];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  
}
