import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserData } from 'src/app/models/user';
import { DatauserService } from 'src/app/services/datauser.service';

@Component({
  selector: 'app-validaciones',
  templateUrl: './validaciones.component.html',
  styleUrls: ['./validaciones.component.css']
})
export class ValidacionesComponent {
  users: string = `${window.sessionStorage.getItem('users')}`;
  userList:UserData[] = [];
  usuario! : string;
  codigo!: number;
  dni!: number;
  dataUsers : any= [];

  constructor(
    private datosusuario: DatauserService,
    private httpClient: HttpClient
    ){
  }

  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users));
  }

  getUserList(id_usuario:string){
      this.httpClient.get('https://backend-nutricion.herokuapp.com/api/users/'+id_usuario)
      .subscribe((data:any)=>{
        this.userList=data;
      })
  }

}
