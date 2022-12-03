import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  users: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers : any= [];

  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users))
  }

}
