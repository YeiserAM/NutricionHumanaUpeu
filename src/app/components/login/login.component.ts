import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SidebarData, User, UserData } from 'src/app/models/user';
import { DatauserService } from 'src/app/services/datauser.service';
import { LoginService } from 'src/app/services/login.service';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Input()idperson:any;

    screenLoading = false;

  ngOnInit() {

    }

  users = new User();
  data_users = new UserData();
  sidebarData = new SidebarData();

  arraySidebar : any=[];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private datosusuario: DatauserService,
   // private perfilcomponents: PerfilComponent
  ) { }

  iniciarsesion(){
    // this.router.navegate(['/menu'])
  }

loading(){
  this.screenLoading = true;
}

 logIn(){
  this.screenLoading = true;
  this.loginService.singin(this.users).subscribe( (res) => {
     sessionStorage.setItem('token',res.token);
     let json = JSON.parse(atob(res.token.split(".")[1]));
     this.data_users.id_usuario = Number(res.data.id_usuario);
     this.data_users.id_rol = Number(res.data.id_rol);
     this.data_users.idpersona = Number(res.data.idpersona);
     this.data_users.usuario = res.data.usuario;
     this.data_users.dni = Number(res.data.dni);
     this.data_users.nombre = res.data.nombre;
     this.data_users.apellidos = res.data.apellidos;
     this.data_users.codigo = Number(res.data.codigo);
     this.data_users.rol = res.data.rol;
     this.data_users.idestudiante = Number(res.data.idestudiante);
    //  console.log(res.sidebar);
     this.arraySidebar= res.sidebar;

     console.log(this.arraySidebar);
    //  console.log(this.data_users);

    //  this.sidebarData.id_sidebar = Number(res.sidebar.id_sidebar);
    //  this.sidebarData.id_rol = Number(res.sidebar.id_rol);
    //  this.sidebarData.nombre = res.sidebar.nombre;
    //  this.sidebarData.path = res.sidebar.path;
    //  this.sidebarData.icon = res.sidebar.icon;

    //  console.log(this.sidebarData);
    //  let response = this.perfilcomponents.getUserList(res.data.id_usuario);
    //  console.log(response);
    //  this.datosusuario.disparadordeusuarios.emit({
    //   data:res.data
    //  })

    sessionStorage.setItem('users', JSON.stringify(this.data_users));
    sessionStorage.setItem('sidebar', JSON.stringify(this.arraySidebar));
    this.screenLoading = false;
    this.router.navigate(['/menu/dashboard']);
    this.toastr.success('Se inicio sesión correctamente')
  },
   err=>{
    this.screenLoading = false;
    this.toastr.error('Usuario o contraseña incorrectos')
   }
  )

}

}
