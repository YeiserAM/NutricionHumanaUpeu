import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private URL = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  TraerDocs(document:{}){
    return this.http.post<any[]>(this.URL+'/api/documento/create-documento', document);
  }
}
