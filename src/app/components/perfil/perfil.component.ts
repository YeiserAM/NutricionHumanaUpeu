import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DatauserService } from 'src/app/services/datauser.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  userList:any;

  constructor(
    private datosusuario: DatauserService,
    private httpClient: HttpClient
    ){
      this.userList=[];
  }

  ngOnInit(): void {
    this.datosusuario.disparadordeusuarios.subscribe((data:any) =>{
      console.log('dataaa:',data)
    })
  //     this.datosusuario.disparadordeusuarios.subscribe(data =>{
  //       console.log('datita: ',data)
  //     })
  }

  getUserList(){
      this.httpClient.get('https://backend-nutricion.herokuapp.com/api/users')
      .subscribe((data:any)=>{
        this.userList=data;
      })
  }

}
