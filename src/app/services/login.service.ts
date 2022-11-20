import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'https://nutricion-backend.herokuapp.com';


  constructor(private http: HttpClient) { }
  
  singin(user:any){
    return this.http.post<any>(`${this.URL}/api/users/login`,user);
  }
}
