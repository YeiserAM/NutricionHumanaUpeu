import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private URL = environment.url;

  constructor(private http: HttpClient) { }

  CrearEstudiante(estudiante:{}){
    return this.http.post<any>(this.URL+'/api/estudiante/create-estudiante',estudiante);
  // return this.http.post<Empresa[]>(`{this.URL}/api/empresa/create-empresa`,empresa);
}

  

}
