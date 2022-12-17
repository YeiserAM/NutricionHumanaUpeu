import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-report-admin',
  templateUrl: './report-admin.component.html',
  styleUrls: ['./report-admin.component.css']
})
export class ReportAdminComponent implements OnInit {


  constructor (
    private router: Router,
    private reportService: ReportesService
  ) {}

  ngOnInit(): void {
    this.reportGraphicBarras();
    this.reportGraphicTorta();
  }

  reportGraphicBarras() {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
          label: '',
          data: [1, 4, 8, 2, 7, 3, 12, 9, 2, 4, 0.1, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          borderRadius: 10,
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Reporte Mensual'
          },
          legend: {
            display: false
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
              // drawBorder: false
            }
          },
          x: {
            grid: {
              display: false,
              // drawBorder: false
            }
          },
        }
      }
    });
  }

  reportGraphicTorta() {
    this.reportService.getReportsAdmin().subscribe( (resp: any) => {
      new Chart("graphycTorta", {
        type: "doughnut",
        data:{
          labels: [
            'Rechazado',
            'Pendientes',
            'Observados',
            'Aceptados',
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [
              resp.data.solicitudesRechazado,
              resp.data.solicitudesPendientes,
              resp.data.solicitudesObservado,
              resp.data.solicitudesAceptado,
            ],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(0,255,0)'
            ],
            hoverOffset: 4
          }]
        }
      });
    });
  }
}
