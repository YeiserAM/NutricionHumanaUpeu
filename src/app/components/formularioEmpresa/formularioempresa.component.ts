import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { UserData } from 'src/app/models/user';
import { EmpresaService } from 'src/app/services/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formularioempresa',
  templateUrl: './formularioempresa.component.html',
  styleUrls: ['./formularioempresa.component.css']
})
export class FormularioempresaComponent implements OnInit{
  empresas: string = `${window.sessionStorage.getItem('users')}`;
  empresa : any= [];
  users: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers : any= [];

  dataEmpresa = new Empresa();

  constructor(private router : Router, private empresaService : EmpresaService) { }

  ngOnInit(): void {
    this.empresa.push(JSON.parse(this.empresas)),
    this.dataUsers.push(JSON.parse(this.users))
  }

  registrarempresa(){

    let dataempresa = {
      nombree: this.dataEmpresa.nombree,
      nombrerep: this.dataEmpresa.nombrerep,
      cargorep: this.dataEmpresa.cargorep,
      gradosup: this.dataEmpresa.gradosup,
      direccion: this.dataEmpresa.direccion,
      telefono: String(this.dataEmpresa.telefono),
      fechappp: this.dataEmpresa.fechappp,
      areappp: this.dataEmpresa.areappp,
      idestudian: this.empresa[0].idestudiante
    }

    // console.log(this.empresa);   

    console.log("Funciono bien");
    console.log(dataempresa);

    this.empresaService.CrearEmpresa(dataempresa).subscribe(data=>{
      console.log(data);
      Swal.fire({
        title: '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 45px">Registro Exitoso</b>',
        icon: 'success',
        html: '<span style="font-size: 22px">Se ha Registrado tú Consulta, lo contactaremos en breve...!</span>',
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
    })
  }

}
