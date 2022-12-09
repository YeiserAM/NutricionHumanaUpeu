import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Solicitudes } from 'src/app/models/solicitudes';
import { UserData } from 'src/app/models/user';
import { DatauserService } from 'src/app/services/datauser.service';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-validaciones',
  templateUrl: './validaciones.component.html',
  styleUrls: ['./validaciones.component.css']
})
export class ValidacionesComponent implements OnInit {
  users: string = `${window.sessionStorage.getItem('users')}`;
  userList:UserData[] = [];
  usuario! : string;
  codigo!: number;
  dni!: number;
  dataUsers : any= [];

  Validaciones = {
    idpersona: String,
    nombre: String,
    apellidos: String,
    dni: String,
    codigo: String,
    idestudiante: String,
    telefonoe: String,
    ubigeo: String,
    nacionalidad: String,
    estadocivil: String,
    idempresa: String,
    nombree: String,
    nombrerep: String,
    gradosup: String,
    cargorep: String,
    areappp: String,
    telefono: String,
    fechappp: String,
    direccion: String
  };


  valiSoli: Solicitudes[] = [];
  dataSoli : any = []; 
  public solicitudes: Array<any> = []

  constructor(
    private datosusuario: DatauserService,
    private solicitudService:SolicitudesService,
    private httpClient: HttpClient
    ){

      this.solicitudService.getSolicitudes().subscribe((resp:any) =>{
        console.log(resp.data)
        this.solicitudes = resp.data;
      })
    
  }

  buscarDatos(id:any){
    console.log(id)
    for (let i = 0; i < this.solicitudes.length; i++) {
      const idpersona = this.solicitudes[i]['idpersona'];
      if (id==idpersona) {
        this.Validaciones={ 
          
            idpersona: this.solicitudes[i]['idpersona'],
            nombre: this.solicitudes[i]['nombre'],
            apellidos: this.solicitudes[i]['apellidos'],
            dni: this.solicitudes[i]['dni'],
            codigo: this.solicitudes[i]['codigo'],
            idestudiante: this.solicitudes[i]['idestudiante'],
            telefonoe: this.solicitudes[i]['telefonoe'],
            ubigeo: this.solicitudes[i]['ubigeo'],
            nacionalidad: this.solicitudes[i]['nacionalidad'],
            estadocivil: this.solicitudes[i]['estadocivil'],
            idempresa: this.solicitudes[i]['idempresa'],
            nombree: this.solicitudes[i]['nombree'],
            nombrerep: this.solicitudes[i]['nombrerep'],
            gradosup: this.solicitudes[i]['gradosup'],
            cargorep: this.solicitudes[i]['cargorep'],
            areappp: this.solicitudes[i]['areappp'],
            telefono: this.solicitudes[i]['telefono'],
            fechappp: this.solicitudes[i]['fechappp'],
            direccion: this.solicitudes[i]['direccion']
            
        }
      }
    }
    // console.log(this.Validaciones)
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
