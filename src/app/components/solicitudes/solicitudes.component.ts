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
  users: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers : any= [];

  estudiante = new Estudiante();


  constructor(private router : Router, private estudianteService : EstudianteService) { }
      
  ngOnInit(): void {


    this.dataUsers.push(JSON.parse(this.users))
  }

  registrarestudiante(){

      let dataestudiante = {
        idestudiante: this.dataUsers[0].idestudiante,
        telefono: this.estudiante.telefono,
        genero: this.estudiante.genero,
        religion: this.estudiante.religion,
        nacionalidad: this.estudiante.nacionalidad,
        fechanacimiento: this.estudiante.fechanacimiento,
        ubigeo: this.estudiante.ubigeo,
        estadocivil: this.estudiante.estadocivil,
        idperso: this.dataUsers[0].idpersona
    }
    // console.log(dataestudiante);
    // console.log(this.estudiante);


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
