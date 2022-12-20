import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reportes } from '../models/reportes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  url='https://backend-nutricion.herokuapp.com/api/reporte/reportes'
  private URL = environment.url;

  constructor(private http: HttpClient) { }

  CrearReportes(reporte:any){
    return this.http.post(this.URL+'/api/reporte/create-reporte', reporte);
  }

  getReportes(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get(this.url, {
      headers: header
    })
  }

  getReportsAdmin() {
    return this.http.get(this.URL + '/api/reporte/reports-all');
  }

  getUsername(){
    return this.http.get(this.URL + '/api/rol/estudiantes');
  }

  getReportsAdminMensual() {
    return this.http.get<any>(this.URL+'/api/reporte/reports-mensuales');
  }

}
