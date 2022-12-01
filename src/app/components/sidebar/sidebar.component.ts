import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  sidebardata: string = `${window.sessionStorage.getItem('sidebar')}`;

  sidebar1 : any =[];
  
  collapsed = true;
  
  constructor(private toastr: ToastrService, private router: Router) {}
  
  ngOnInit(): void {
      this.sidebar1 = (JSON.parse(this.sidebardata));
  }
  singOff() {
    sessionStorage.removeItem('token');
    this.toastr.info('Se ha cerrado la Sesión');
    this.router.navigate(['/']);
  }


}
