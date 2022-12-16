import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  private URL = environment.url;

  constructor(private http: HttpClient) { }

  enviarMail(emailData: {}) {
    return this.http.post(this.URL + 'api/correo/enviar', emailData);
  }
}
