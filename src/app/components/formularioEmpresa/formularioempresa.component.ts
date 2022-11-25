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

  empresa = new Empresa();

  user = new UserData();

  constructor(private router : Router, private empresaService : EmpresaService) { }

  ngOnInit(): void {
  }

  registrarempresa(){
    // console.log("Funciono bien");
    // console.log(this.empresa);
    console.log(this.user);

    let dataempresa = {
      idempresa: 5,
      nombree: "Posta San Matooo",
      ruc: "ooo",
      direccion: "san mate",
      nombrerep: "  humpiri",
      cargorep: "ooo",
      gradosup: "licenciado",
      telefono: "159236478",
      fechappp: "2022-07-10",
      areappp: "54444",
      idestudian: 4
    }
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
