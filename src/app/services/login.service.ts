import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'https://bd-nutricion.herokuapp.com';


  constructor(private http: HttpClient) { }
  
  singin(user:any){
    return this.http.post(`${this.URL}/api/users`,user);
  }
}
