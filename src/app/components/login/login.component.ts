import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User, UserData } from 'src/app/models/user';
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
  ngOnInit() {
    
    }

  users = new User();
  data_users = new UserData();

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

 logIn(){
  this.loginService.singin(this.users).subscribe( (res) => {
     sessionStorage.setItem('token',res.token);
     let json = JSON.parse(atob(res.token.split(".")[1]));
     console.log(res.data);
     this.data_users.usuario = res.data.usuario;
     this.data_users.idperson = res.data.idperson;
     this.data_users.codigo = res.data.codigo;
     this.data_users.dni = res.data.dni;
     this.data_users.id_rol = res.data.id_rol;
     this.data_users.id_usuario = res.data.id_usuario;
    //  let response = this.perfilcomponents.getUserList(res.data.id_usuario);
    //  console.log(response);
    //  this.datosusuario.disparadordeusuarios.emit({
    //   data:res.data
    //  })
     
    sessionStorage.setItem('users', JSON.stringify(this.data_users))
    this.router.navigate(['/menu/dashboard']);
    this.toastr.success('Se inicio sesión correctamente')
  },
   err=>{
    this.toastr.error('Usuario o contraseña incorrectos')
   }
  )

}

}
