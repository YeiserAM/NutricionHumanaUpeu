import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {

  estudiante = new Estudiante();


  constructor(private router : Router, private estudianteService : EstudianteService) { }
      
  ngOnInit(): void {
  }

  registrarestudiante(){

      let dataestudiante = {
        idestudiante: 5,
        telefono: "982656635",
        genero: "M",
        religion: "adventista",
        nacionalidad: "peruana",
        fechanacimiento: "2022-04-06T00:00:00.000Z",
        ubigeo: "20011",
        estadocivil: "soltero",
        idperso: 5
    }


    this.estudianteService.CrearEstudiante(dataestudiante).subscribe(data=>{
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
