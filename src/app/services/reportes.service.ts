import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reportes } from '../models/reportes';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private URL = environment.url;

  constructor(private http: HttpClient) { }

  CrearReportes(reporte:{}){
    return this.http.post<Reportes[]>(this.URL+'/api/reportes/create-reportes', reporte);
  }
}
