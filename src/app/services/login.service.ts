import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = environment.url;


  constructor(private http: HttpClient) { }

  singin(user:any){
    return this.http.post<any>(`${this.URL}/api/users/login`,user);
  }
}
