import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empresa } from '../models/empresa';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private URL = environment.url;


  constructor(private http: HttpClient) { }

  CrearEmpresa(empresa:Empresa){
      return this.http.post<Empresa[]>(this.URL+'/create-empresa',empresa);
    // return this.http.post<Empresa[]>(`{this.URL}/api/empresa/create-empresa`,empresa);
  }
}

