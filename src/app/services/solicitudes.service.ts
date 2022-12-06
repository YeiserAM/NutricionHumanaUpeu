import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  @Output() disparadacalidaciones: EventEmitter<any> = new EventEmitter();
  url='https://backend-nutricion.herokuapp.com/api/solicitud/solicitudes'  

  constructor(
    public http: HttpClient

  ) { 
    
    console.log("pruebaaa")
  }

  getSolicitudes(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
      return this.http.get(this. url, {
        headers: header
      });
  }

}
