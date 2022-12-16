import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { UserData } from 'src/app/models/user';
import { EmpresaService } from 'src/app/services/empresa.service';
import { SolicitudesService } from 'src/app/services/solicitudes.service';
import Swal from 'sweetalert2';
import { SolicitudesCreate } from '../../models/solicitudes';
import { SolicitudesComponent } from '../solicitudes/solicitudes.component';

@Component({
  selector: 'app-formularioempresa',
  templateUrl: './formularioempresa.component.html',
  styleUrls: ['./formularioempresa.component.css'],
  template: `
  `
})
export class FormularioempresaComponent implements OnInit {

  @Input() soli : any;

  @Output() newItemevent = new EventEmitter();

  empresa : any= [];

  users: any = `${window.sessionStorage.getItem('users')}`;

  dataUsers : any= [];

  dataEmpresa = new Empresa();

  solicitudCreate = new SolicitudesCreate();

  respuestaSolicitud: any[] = [];

  aparecer = true;

  constructor(
    private router : Router,
    private empresaService : EmpresaService,
    private solicitud : SolicitudesService
    ) { }

  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users));
  }

  registrarsolicitud(){

    let dataempresa = {
      nombreemp: this.solicitudCreate.nombreemp,
      nombreapeliidorep: this.solicitudCreate.nombreapeliidorep,
      cargorep: this.solicitudCreate.cargorep,
      gradorep: this.solicitudCreate.gradorep,
      direccionemp: this.solicitudCreate.direccionemp,
      telefonoemp: this.solicitudCreate.telefonoemp,
      fechappp: this.solicitudCreate.fechappp,
      areappp: this.solicitudCreate.areappp,
      estado_civil: this.soli.estado_civil,
      religion: this.soli.religion,
      fechanacimiento: this.soli.fechanacimiento,
      ubigeo: this.soli.ubigeo,
      id_usuario: this.dataUsers[0].id_usuario,
    }

    this.solicitud.createsolicitud(dataempresa).subscribe((data:any)=>{
      this.respuestaSolicitud.push(data.data)
      Swal.fire({
        title: '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 45px">Registro Exitoso</b>',
        icon: 'success',
        html: '<span style="font-size: 22px">Se ha Registrado tú Empresa, Gracias...!</span>',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#52A820',
        iconColor: '#52A820'
        // showClass: {
        //   popup: 'animate_animated animate_fadeInDown'
        // },
        // hideClass: {
        //   popup: 'animate_animated animate_fadeOutUp'
        // },
        // imageUrl: 'https://unsplash.it/400/200',
        // imageWidth: 400,
        // imageHeight: 200,
        // imageAlt: 'Custom image',
      });
      this.aparecer= false;
    })
  }

}
