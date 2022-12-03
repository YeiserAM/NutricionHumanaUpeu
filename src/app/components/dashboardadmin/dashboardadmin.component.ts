import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent {
  users: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers : any= [];

  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users))
  }

}
