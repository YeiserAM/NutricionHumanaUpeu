import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import Swal from 'sweetalert2';
import { SolicitudesCreate } from '../../models/solicitudes';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css'],
})
export class SolicitudesComponent {

  users: string = `${window.sessionStorage.getItem('users')}`;

  dataUsers : any= [];

  estudiante = new Estudiante();

  aparece = true;

  solicitudCreate = new SolicitudesCreate();

  constructor(private router : Router, private estudianteService : EstudianteService) { }

  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users))
  }

  enviarDatos(){
    this.aparece = false;
    // this.newItemEvent.emit(this.solicitudCreate);
 }

}
