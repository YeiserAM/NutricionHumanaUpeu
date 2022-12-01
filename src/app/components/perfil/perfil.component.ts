import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/user';
import { DatauserService } from 'src/app/services/datauser.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  users: string = `${window.sessionStorage.getItem('users')}`;
  userList:UserData[] = [];
  usuario! : string;
  codigo!: number;
  dni!: number;

  constructor(
    private datosusuario: DatauserService,
    private httpClient: HttpClient
    ){
  }

  ngOnInit(): void {
    let arrIdrol = JSON.parse(this.users);
    console.log(arrIdrol);
    this.codigo = arrIdrol["codigo"];
    this.dni = arrIdrol["dni"];
    this.usuario = arrIdrol["id_usuario"];
    this.datosusuario.disparadordeusuarios.subscribe((data:any) =>{
      console.log('dataaa:',data)
    })
  //     this.datosusuario.disparadordeusuarios.subscribe(data =>{
  //       console.log('datita: ',data)
  //     })
  }

  getUserList(id_usuario:string){
      this.httpClient.get('https://backend-nutricion.herokuapp.com/api/users/'+id_usuario)
      .subscribe((data:any)=>{
        this.userList=data;
      })
  }

}
