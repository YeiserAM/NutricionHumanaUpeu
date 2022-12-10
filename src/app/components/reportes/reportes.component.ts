import { Component } from '@angular/core';
import { Reportes } from 'src/app/models/reportes';
import { ReportesService } from 'src/app/services/reportes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  users: string = `${window.sessionStorage.getItem('users')}`;
  reportes: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers : any = [];
  reporte : any = [];

  dataReportes = new Reportes();
  
  constructor(
    private reporteService : ReportesService
  ){

  }

  ngOnInit(): void {
    
    this.dataUsers.push(JSON.parse(this.users));
    // this.dataReportes.push(JSON.parse(this.reportes))
  }

  registrarReportes(){

    let datareportes = {
      titulo: this.dataReportes.titulo,
      tipo: this.dataReportes.tipo,
      descripcion: this.dataReportes.descripcion
    }
    console.log(this.reportes);

    this.reporteService.CrearReportes(datareportes).subscribe(data => {
      console.log(data);
      Swal.fire({
        title: '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 45px">Registro Exitoso</b>',
        icon: 'success',
        html: '<span style="font-size: 22px">Se ha Registrado tú Consulta, lo contactaremos en breve...!</span>',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#52A820',
        iconColor: '#52A820'
      });
    })

  }
}
