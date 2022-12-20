import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Solicitudes } from '../models/solicitudes';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  @Output() disparadacalidaciones: EventEmitter<any> = new EventEmitter();
  url='https://backend-nutricion.herokuapp.com/api/solicitud/solicitudpendiente'
  private URL = environment.url;

  constructor(
    public http: HttpClient

  ) {

  }

  getSolicitudes(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
      return this.http.get(this. url, {
        headers: header
      });
  }

  eliminarsolicitud(id_solicitud:any){
    return this.http.delete<any>(this.URL+'/api/solicitud/delete/'+id_solicitud);

}

  createsolicitud(datasolicitud:any){
    return this.http.post(this.URL+'/api/solicitud/create-solicitud',datasolicitud)
  }
  
  getdocumentos(){
    return this.http.get<any>(this.URL+'/api/documento/documento')
  }
}
