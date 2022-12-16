import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

// interface SideNavToggle {
//   // screenWidth: number;
//   collapsed: boolean;
// }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  // @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  sidebardata: string = `${window.sessionStorage.getItem('sidebar')}`;

  sidebar1 : any =[];

  collapsed = true;
  // screenWidth = 0;

  logooculto = false;


  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
      this.sidebar1 = (JSON.parse(this.sidebardata));
  }

  abrirsidebar() : void {
    this.logooculto = false;
    console.log(this.logooculto);
    this.collapsed = !this.collapsed;
    // this.onToggleSidenav.emit({ collapsed: this.collapsed });
  }

  closesidebar() : void {
    this.logooculto = true;
    console.log(this.logooculto);
    this.collapsed = false;
    // this.onToggleSidenav.emit({ collapsed: this.collapsed });
  }

  singOff() {
    sessionStorage.removeItem('token');
    this.toastr.info('Se ha cerrado la Sesión');
    this.router.navigate(['/']);
  }


}
