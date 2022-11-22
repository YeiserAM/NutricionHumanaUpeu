import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  collapsed = true;

  constructor(private toastr: ToastrService, private router: Router) {}

  singOff() {
    sessionStorage.removeItem('token');
    this.toastr.info('Se ha cerrado la Sesión');
    this.router.navigate(['/']);
  }
}
