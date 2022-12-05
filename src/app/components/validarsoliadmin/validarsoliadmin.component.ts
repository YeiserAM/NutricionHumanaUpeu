import { Component } from '@angular/core';

@Component({
  selector: 'app-validarsoliadmin',
  templateUrl: './validarsoliadmin.component.html',
  styleUrls: ['./validarsoliadmin.component.css']
})
export class ValidarsoliadminComponent {
  users: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers : any= [];
  showModal = false;


  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users))
  }
}
