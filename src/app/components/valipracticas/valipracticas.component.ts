import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valipracticas',
  templateUrl: './valipracticas.component.html',
  styleUrls: ['./valipracticas.component.css']
})
export class ValipracticasComponent implements OnInit{
  users: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers : any= [];

  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users));

  }

}
