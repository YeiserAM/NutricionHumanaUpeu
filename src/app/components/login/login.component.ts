import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User, UserData } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    }

  users = new User();

  data_users = new UserData();

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  iniciarsesion(){
    // this.router.navegate(['/menu'])
  }

 logIn(){
   console.log(this.users);
  this.loginService.singin(this.users).subscribe( (res) => { 
    //  sessionStorage.setItem('token',res.token);
    //  let json = JSON.parse(atob(res.token.split(".")[1]));
    //  console.log(json) 
    //  this.users.usuario = json.data[0].usuario;
    //  this.users.id_rol = json.data[0].id_rol;
    //  console.log(json.data[0])  
    //  sessionStorage.setItem('usuario', JSON.stringify(this.data_users))
    this.router.navigate(['/menu/dashboard']);
    this.toastr.success('Se inicio sesión correctamente')
  },
   err=>{
    this.toastr.error('Usuario o contraseña incorrectos')
   }
  )

}

}
