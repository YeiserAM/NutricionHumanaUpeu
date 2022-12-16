import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reportes } from '../models/reportes';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  url='https://backend-nutricion.herokuapp.com/api/reporte/reportes'
  private URL = environment.url;

  constructor(private http: HttpClient) { }

  CrearReportes(reporte:{}){
    return this.http.post<Reportes[]>(this.URL+'/api/reporte/create-reporte', reporte);
  }

  getReportes(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get(this.url, {
      headers: header
    })
  }
}
