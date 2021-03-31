import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafnivel',
  templateUrl: './grafnivel.component.html',
  styleUrls: ['./grafnivel.component.css']
})
export class GrafnivelComponent implements OnInit {

// Doughnut
public doughnutChartLabels: Label[] = ['Entre 71 y 80','Entre 81 y 90','Entre 91 y 100'];
public doughnutChartData: MultiDataSet = [
  [0,68, 32]
];
public doughnutChartType: ChartType = 'doughnut';







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
  public barChartLabels: Label[] = ['Valores'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [0], label: 'Entre 0 y 10' },
    { data: [0], label: 'Entre 11 y 20'},
    { data: [0], label: 'Entre 21 y 30'},
    { data: [0], label: 'Entre 31 y 40'},
    { data: [0], label: 'Entre 41 y 50'},
    { data: [0], label: 'Entre 51 y 60'},
    { data: [0], label: 'Entre 61 y 70'},
    { data: [0], label: 'Entre 71 y 80'},
    { data: [68], label: 'Entre 81 y 90'},
    { data: [32], label: 'Entre 91 y 100'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

 




  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
