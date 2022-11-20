import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  user = {
    username: 'chris',
    password: '123'
  }
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  iniciarsesion(){
    // this.router.navegate(['/menu'])
  }

 logIn(){
   console.log(this.user);
  this.loginService.singin(this.user).subscribe( (res:any) => {
     console.log(res);
     localStorage.setItem('token',res.token);
    this.router.navigate(['']);
  },
   err=>console.log(err)
  )

}

}
