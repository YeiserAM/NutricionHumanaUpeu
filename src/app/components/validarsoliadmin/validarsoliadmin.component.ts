import { Component,OnInit,ViewEncapsulation } from '@angular/core';
// import {} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-validarsoliadmin',
  templateUrl: './validarsoliadmin.component.html',
  styleUrls: ['./validarsoliadmin.component.css']
})
export class ValidarsoliadminComponent {
  users: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers : any= [];


  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users))
  }
}
